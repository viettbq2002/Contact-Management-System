/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, SimpleGrid, Container, rem } from "@mantine/core";
import { IconAddressBook, IconCertificate, IconAdjustmentsAlt } from "@tabler/icons-react";
import classes from "../../style/FeatureSection.module.css";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, ...others }: Readonly<FeatureProps>) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon style={{ width: rem(38), height: rem(38) }} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconAddressBook,
    title: "Centralized Contact Database",
    description: "Store and access all your contacts in one secure, easily navigable location.",
  },
  {
    icon: IconCertificate,
    title: "Best Quality Product",
    description: "Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.",
  },
  {
    icon: IconAdjustmentsAlt,
    title: "Advanced Search and Filters",
    description: " Quickly find contacts using powerful search and filtering options, saving you time and effort.",
  },
];

export function FeatureSection() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
