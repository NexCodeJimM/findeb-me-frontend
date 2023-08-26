"use client";

import ServiceList from "@/components/ServicesPage/ServiceList/ServiceList";
import PageHeader from "@/components/common/modules/PageHeader/PageHeader";
import { Box } from "@chakra-ui/react";

const Services = () => {
  return (
    <>
      <PageHeader
        photo={`url('./assets/images/services1.jpg')`}
        title="Our Services"
        desc="Embark on a journey of excellence with our comprehensive suite of services."
      />

      <Box maxWidth="1280px" margin="0 auto" padding="2rem">
        <ServiceList />
      </Box>
    </>
  );
};

export default Services;
