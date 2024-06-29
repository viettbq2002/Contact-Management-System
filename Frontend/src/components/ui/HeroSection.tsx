import { Container, Title, Button, Text } from "@mantine/core";
import { Dots } from "./Dot";
import classes from "../../style/HeroText.module.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          A Full Feature{" "}
          <Text component="span" className={classes.highlight} inherit>
            Contact Management
          </Text>{" "}
          System
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Effortlessly manage and organize your contacts with our intuitive Contact Management System. Boost productivity and enhance connections
            with ease.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button component={Link} to={"/login"} className={classes.control} size="lg" variant="default" color="gray">
            Get started
          </Button>
          <Button component={Link} to={"/register"} className={classes.control} size="lg">
            Create a free account
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
