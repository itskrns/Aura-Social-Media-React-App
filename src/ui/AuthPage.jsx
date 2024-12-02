import React, { useState } from "react";
import styled from "styled-components";
import {
  Box,
  Button,
  Input,
  Stack,
  Heading,
  FormControl,
  Flex,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";

const LeftSection = styled.div`
  background: linear-gradient(135deg, #16a085, #1abc9c);
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100vh;
  padding: 0;
  margin: 0;
  text-align: center;
  color: white;
  .content {
    max-width: 500px;
    padding: 2rem;
    text-align: center;

    .logo {
      font-size: 4rem;
      font-weight: 700;
      letter-spacing: 5px;
      color: #fff;
      margin-bottom: 20px;
    }

    .slogan {
      font-size: 1.5rem;
      font-weight: 300;
      color: #fff;
      margin-top: 20px;
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const RightSection = styled.div`
  background: #f7fafc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  margin: 1rem;
`;

export default function AuthPage() {
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: OTP
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1); // Ensure only one digit per box
    setOtp(newOtp);
  };

  return (
    <Flex
      minH="100vh"
      direction={{ base: "column", md: "row" }}
      justify="center"
      align="center"
      bg="#f4f6f9"
      px={{ base: 4, md: 8 }}
      py={8}
    >
      <Box flex={1} display="flex" justifyContent="center" alignItems="center">
        <LeftSection>
          <div className="content">
            <div className="logo">Aura</div>
            <div className="slogan">
              The Social Space to Connect, Share & Explore
            </div>
          </div>
        </LeftSection>
      </Box>

      <Box
        flex={1}
        minH="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <RightSection>
          <div className="form-container">
            <Heading
              as="h2"
              size="lg"
              mb={6}
              textAlign="center"
              color="#1abc9c"
            >
              {step === 1 ? "Sign Up / Sign In" : "Enter OTP"}
            </Heading>
            <Stack spacing={6} w="100%">
              {step === 1 && (
                <>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter Email"
                      variant="outline"
                      size="lg"
                      focusBorderColor="#1abc9c"
                      borderRadius="md"
                      mb={4}
                      _hover={{ borderColor: "#16a085" }}
                      fontSize="1.2rem" // Increased text size
                    />
                  </FormControl>
                  <Button
                    onClick={() => setStep(2)}
                    size="lg"
                    colorScheme="teal"
                  >
                    Send OTP
                  </Button>
                </>
              )}
              {step === 2 && (
                <>
                  <Flex justifyContent="center" alignItems="center" mb={6}>
                    {otp.map((digit, index) => (
                      <Input
                        key={index}
                        value={digit}
                        onChange={(e) => handleOtpChange(e.target.value, index)}
                        maxLength={1}
                        width="3rem"
                        height="3rem"
                        textAlign="center"
                        fontSize="2rem" // Increased font size for OTP boxes
                        margin="0 0.5rem"
                        focusBorderColor="#f39c12"
                      />
                    ))}
                  </Flex>
                  <Button size="lg" colorScheme="teal">
                    Verify & Login
                  </Button>
                </>
              )}
            </Stack>
          </div>
        </RightSection>
      </Box>
    </Flex>
  );
}
