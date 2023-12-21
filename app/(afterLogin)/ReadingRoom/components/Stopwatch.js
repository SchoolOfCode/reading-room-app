// index.js
'use client';

import { useState, useRef, useEffect } from 'react';
import { Container, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { fonts } from '@/app/fonts';

//function to create useState hook to create a state variable named time and a function setTime to update its value.
// Create object in use useState with 3 pair (hours, minutes, seconds)
const StopWatch = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  //create a mutable useRef function to reference the current time to the nearest second
  const startStopwatch = () => {
    startTimeRef.current =
      Date.now() - (time.hours * 3600 + time.minutes * 60 + time.seconds) * 1000;
    //create a mutable useRef function to reference the current interval
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        const seconds = prevTime.seconds + 1;
        const minutes = prevTime.minutes + Math.floor(seconds / 60);
        const hours = prevTime.hours + Math.floor(minutes / 60);
        return {
          hours: hours,
          minutes: minutes % 60,
          seconds: seconds % 60,
        };
      });
    }, 1000);
    //Updates the running state to true to indicate that the stopwatch is running.
    setRunning(true);
  };

  // Function that use state to pause and resume the timer
  const pauseStopwatch = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    setRunning(false);
  };

  const resumeStopwatch = () => {
    startTimeRef.current =
      Date.now() - (time.hours * 3600 + time.minutes * 60 + time.seconds) * 1000;
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        const seconds = prevTime.seconds + 1;
        const minutes = prevTime.minutes + Math.floor(seconds / 60);
        const hours = prevTime.hours + Math.floor(minutes / 60);
        return {
          hours: hours,
          minutes: minutes % 60,
          seconds: seconds % 60,
        };
      });
    }, 1000);
    setRunning(true);
  };

  // Declare number of place values for each measure of time
  const formattedSeconds = `${time.seconds}`.padStart(2, '0');
  const formattedMinutes = `${time.minutes}`.padStart(2, '0');
  const formattedHours = `${time.hours}`.padStart(2, '0');

  // Function with in useEffect Hook the structure the compoment
  useEffect(() => {
    if (running) {
      startStopwatch();
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [running]);

  return (
    <Container centerContent bg='#FFD6A5'>
      <Heading as='h1' fontSize='4xl' color='#1f1f1f' className={fonts.arvo.className}>
        Stopwatch
      </Heading>
      <Text fontSize='20px' color='#1f1f1f' marginBottom='10px' className={fonts.arvo.className}>
        Time flies when you're having fun!
      </Text>
      <Text fontSize='20px' color='#1f1f1f' marginBottom='10px' className={fonts.arvo.className}>
        Keep track of it by using the timer.
      </Text>
      <Text
        fontSize='64px'
        color='#1f1f1f'
        fontWeight='bold'
        marginBottom='20px'
        border='2px solid #1f1f1f'
        borderRadius='5px'
        padding='5px'
        className={fonts.arvo.className}
        bgColor='whitesmoke'
      >
        {formattedHours}:{formattedMinutes}:{formattedSeconds}
      </Text>
      <Flex gap='20px'>
        {running ? (
          <Button
            className={fonts.arvo.className}
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              fontSize: '16px',
              color: '#F34213',
              cursor: 'pointer',
              backgroundColor: '#FFADAD',
            }}
            onClick={pauseStopwatch}
          >
            Pause
          </Button>
        ) : (
          <>
            <Button
              className={fonts.arvo.className}
              style={{
                padding: '10px 20px',
                borderRadius: '5px',
                fontSize: '16px',
                color: '#F34213',
                cursor: 'pointer',
                backgroundColor: '#CAFFBF',
              }}
              onClick={startStopwatch}
            >
              Start
            </Button>
            <Button
              className={fonts.arvo.className}
              style={{
                padding: '10px 20px',
                borderRadius: '5px',
                fontSize: '16px',
                color: '#F34213',
                cursor: 'pointer',
                backgroundColor: '#BDB2FF',
              }}
              onClick={resetStopwatch}
            >
              Reset
            </Button>
          </>
        )}
        {!running && (
          <Button
            className={fonts.arvo.className}
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              fontSize: '16px',
              color: '#F34213',
              cursor: 'pointer',
              backgroundColor: '#FDFFAB',
            }}
            onClick={resumeStopwatch}
          >
            Resume
          </Button>
        )}
      </Flex>
    </Container>
  );
};

export default StopWatch;
