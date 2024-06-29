using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BussinessLogic.Models;
using ContactManagementApi.DTO.Auth;
using ContactManagementApi.Service;
using DataAccess.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace ContactManagementApi.Controllers
{
    [ApiController]
    [Route("api/[controller]/[Action]")]
    public class AuthController : ControllerBase
    {
        private readonly IJwtGenerator _jwtGenerator;
        private readonly IMapper _mapper;

        private readonly IUserRepository _userRepository;
        public AuthController(IJwtGenerator jwtGenerator, IMapper mapper, IUserRepository userRepository)
        {
            _jwtGenerator = jwtGenerator;
            _mapper = mapper;
            _userRepository = userRepository;
        }
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await _userRepository.GetUserByUsernameAsync(request.Username);
            if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.HashedPassword))
            {
                return BadRequest(new
                {
                    Message = "Username or Password is incorrect"
                });
            }
            var token = _jwtGenerator.GenerateToken(user.Id);
            var userReponse = _mapper.Map<LoginResponse>(user);
            userReponse.AccessToken = token;
            return Ok(userReponse);


        }
        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            if (await _userRepository.CheckUserExistsAsync(request.Username))
            {
                return BadRequest(new
                {
                    Message = "User already exists"
                });
            }
            var newUser = _mapper.Map<User>(request);
            var passwordHash = BCrypt.Net.BCrypt.HashPassword(request.Password);
            newUser.HashedPassword = passwordHash;

            await _userRepository.CreateUserAsync(newUser);


            return Ok(new
            {
                Message = "Register Successfully"
            });

        }

    }
}