using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BussinessLogic.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace ContactManagementApi.Service
{
    public class JwtGenerator : IJwtGenerator
    {
        private readonly JwtSettings _jwtSettings;

        public JwtGenerator(IOptions<JwtSettings> jwtOptions)
        {
            _jwtSettings = jwtOptions.Value;
        }

        public string GenerateToken(Guid userId)
        {
            var sercurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSettings.Secret));
            var signingCredentials = new SigningCredentials(sercurityKey, SecurityAlgorithms.HmacSha256);
            var claims = new List<Claim>()
            {
                new(JwtRegisteredClaimNames.Sub, userId.ToString()),
                new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };
            var sercurityToken = new JwtSecurityToken(
            issuer: _jwtSettings.Issuer,
           expires: DateTime.UtcNow.AddDays(_jwtSettings.ExpirationsDays),
           audience: _jwtSettings.Audience,
           signingCredentials: signingCredentials, claims: claims
           );
            var tokenString = new JwtSecurityTokenHandler().WriteToken(sercurityToken);
            return tokenString;
        }
    }
}