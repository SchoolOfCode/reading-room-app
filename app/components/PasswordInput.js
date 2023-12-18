'use client';

import {
  FormControl,
  FormLabel,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import { useState } from 'react';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <FormControl width="90%">
      <FormLabel fontSize={18} fontWeight="bold">
        Password
      </FormLabel>
      <InputGroup>
        <Input
          placeholder="🔑 Your password"
          rounded="none"
          variant="filled"
          type={showPassword ? 'text' : 'password'}
          border="none"
          borderBottom="2px solid #B596C8"
          borderRadius={5}
          _focus={{
            bg: 'blue.50',
            borderColor: '#B596C8',
          }}
        />
        <InputRightElement>
          <IconButton
            aria-label={showPassword ? 'Hide Password' : 'Show Password'}
            icon={showPassword ? <FaEyeSlash /> : <FaEye />}
            onClick={togglePasswordVisibility}
            variant="ghost"
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}
