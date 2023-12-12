// // index.js 
'use client'
// import { useState, useRef, useEffect } from 'react'; 
// import { Container, Flex, Icon, Box } from '@chakra-ui/react';
// import { Link } from '@chakra-ui/next-js';
// import { VStack } from "@chakra-ui/react";

// const styles = { 
// 	container: { 
// 		display: 'flex', 
// 		flexDirection: 'column', 
// 		alignItems: 'center', 
// 		justifyContent: 'center', 
// 		minHeight: '100vh', 
// 	}, 
// 	title: { 
// 		display: 'flex',
// 		fontSize: '25px', 
// 		color: '#1f1f1f', 
// 		marginBottom: '10px', 
// 		fontFamily: 'Arial, sans-serif', 
// 	},  
// 	subtitle: {
// 		display: 'flex',
// 		fontSize: '15px', 
// 		color: '#1f1f1f', 
// 		marginBottom: '10px', 
// 		fontFamily: 'Arial, sans-serif', 
// 	},
// 	time: { 
// 		display: 'flex',
// 		fontSize: '64px', 
// 		color: '#1f1f1f', 
// 		fontWeight: 'bold', 
// 		marginBottom: '20px', 
// 		border: '2px solid #1f1f1f', 
// 		borderRadius: '5px',
// 		padding: '5px', 
// 	}, 
// 	buttons: { 
// 		display: 'flex', 
// 		gap: '20px',
// 	}, 
// 	button: { 
// 		padding: '10px 20px', 
// 		borderRadius: '5px', 
// 		fontSize: '16px', 
// 		color: '#F34213', 
// 		cursor: 'pointer', 
// 		border: 'none', 
// 		outline: 'none', 
// 		boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', 
// 	}, 
// 	startButton: { 
// 		backgroundColor: '#F3E5AB', 
// 	}, 
// 	resetButton: { 
// 		backgroundColor: '#F3E5AB', 
// 	}, 
// 	resumeButton: { 
// 		backgroundColor: '#F3E5AB', 
// 	}, 
// 	pauseButton: { 
// 		backgroundColor: '#F3E5AB', 
// 	}, 
// }; 
// export default function Home() {
// 	const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
// 	const [running, setRunning] = useState(false);
// 	const intervalRef = useRef(null);
// 	const startTimeRef = useRef(0);

// 	const startStopwatch = () => {
// 		startTimeRef.current =
// 			Date.now() -
// 			(time.hours * 3600 + time.minutes * 60 + time.seconds) * 1000;
// 		intervalRef.current = setInterval(() => {
// 			setTime(prevTime => {
// 				const seconds = prevTime.seconds + 1;
// 				const minutes = prevTime.minutes + Math.floor(seconds / 60);
// 				const hours = prevTime.hours + Math.floor(minutes / 60);
// 				return {
// 					hours: hours,
// 					minutes: minutes % 60,
// 					seconds: seconds % 60
// 				};
// 			});
// 		}, 1000);
// 		setRunning(true);
// 	};

// 	const pauseStopwatch = () => {
// 		clearInterval(intervalRef.current);
// 		setRunning(false);
// 	};

// 	const resetStopwatch = () => {
// 		clearInterval(intervalRef.current);
// 		setTime({ hours: 0, minutes: 0, seconds: 0 });
// 		setRunning(false);
// 	};

// 	const resumeStopwatch = () => {
// 		startTimeRef.current =
// 			Date.now() -
// 			(time.hours * 3600 + time.minutes * 60 + time.seconds) * 1000;
// 		intervalRef.current = setInterval(() => {
// 			setTime(prevTime => {
// 				const seconds = prevTime.seconds + 1;
// 				const minutes = prevTime.minutes + Math.floor(seconds / 60);
// 				const hours = prevTime.hours + Math.floor(minutes / 60);
// 				return {
// 					hours: hours,
// 					minutes: minutes % 60,
// 					seconds: seconds % 60
// 				};
// 			});
// 		}, 1000);
// 		setRunning(true);
// 	};

// 	const formattedSeconds = `${time.seconds}`.padStart(2, '0');
// 	const formattedMinutes = `${time.minutes}`.padStart(2, '0');
// 	const formattedHours = `${time.hours}`.padStart(2, '0');

// 	useEffect(() => {
// 		if (running) {
// 			startStopwatch();
// 		}
// 		return () => {
// 			clearInterval(intervalRef.current);
// 		};
// 	}, [running]);

// 	return ( 
// 		<Box>
// 			<div style={styles.container}> 
// 				<h1 style={styles.title}> 
// 					Stopwatch
// 				</h1> 
// 				<h2 style={styles.title}>Want A Challenge? - Time Your Reading</h2>
// 				{/* <div style={styles.time}>
// 				{time.hours}:
// 				{time.minutes}: 
// 				{time.seconds}
// 				</div> */}
// 				<p style={styles.time}>{formattedHours}:{formattedMinutes}:{formattedSeconds}</p>
// 				<div style={styles.buttons}> 
// 					{running ? ( 
// 						<button style={{ ...styles.button, ...styles.pauseButton }} onClick={pauseStopwatch}> 
// 							Pause 
// 						</button> 
// 					) : ( 
// 						<> 
// 							<button style={{ ...styles.button, ...styles.startButton }} onClick={startStopwatch}> 
// 								Start 
// 							</button> 
// 							<button style={{ ...styles.button, ...styles.resetButton }} onClick={resetStopwatch}> 
// 								Reset 
// 							</button> 
// 						</> 
// 					)} 
// 					{!running && ( 
// 						<button style={{ ...styles.button, ...styles.resumeButton }} onClick={resumeStopwatch}> 
// 							Resume 
// 						</button> 
// 					)}
// 				</div> 
// 			</div> 
// 		</Box>
// 	); 
// }

// index.js
import { useState, useRef, useEffect } from 'react';
import { Box, Container, Flex, VStack, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

//function to create useState hook to create a state variable named time and a function setTime to update its value.
const Home = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  const startStopwatch = () => {
		//create a mutable useRef function to reference the current time	
    startTimeRef.current =
      Date.now() -
      (time.hours * 3600 + time.minutes * 60 + time.seconds) * 1000;
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
      Date.now() -
      (time.hours * 3600 + time.minutes * 60 + time.seconds) * 1000;
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

  const formattedSeconds = `${time.seconds}`.padStart(2, '0');
  const formattedMinutes = `${time.minutes}`.padStart(2, '0');
  const formattedHours = `${time.hours}`.padStart(2, '0');

  useEffect(() => {
    if (running) {
      startStopwatch();
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [running]);

  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Heading as="h1" fontSize="25px" color="#1f1f1f">
          Stopwatch
        </Heading>
        <Text fontSize="15px" color="#1f1f1f" marginBottom="10px">
          Want A Challenge? - Time Your Reading
        </Text>
        <Text
          fontSize="64px"
          color="#1f1f1f"
          fontWeight="bold"
          marginBottom="20px"
          border="2px solid #1f1f1f"
          borderRadius="5px"
          padding="5px"
        >
          {formattedHours}:{formattedMinutes}:{formattedSeconds}
        </Text>
        <Flex gap="20px">
          {running ? (
            <Button
              style={{ padding: '10px 20px', borderRadius: '5px', fontSize: '16px', color: '#F34213', cursor: 'pointer', backgroundColor: '#F3E5AB' }}
              onClick={pauseStopwatch}
            >
              Pause
            </Button>
          ) : (
            <>
              <Button
                style={{ padding: '10px 20px', borderRadius: '5px', fontSize: '16px', color: '#F34213', cursor: 'pointer', backgroundColor: '#F3E5AB' }}
                onClick={startStopwatch}
              >
                Start
              </Button>
              <Button
                style={{ padding: '10px 20px', borderRadius: '5px', fontSize: '16px', color: '#F34213', cursor: 'pointer', backgroundColor: '#F3E5AB' }}
                onClick={resetStopwatch}
              >
                Reset
              </Button>
            </>
          )}
          {!running && (
            <Button
              style={{ padding: '10px 20px', borderRadius: '5px', fontSize: '16px', color: '#F34213', cursor: 'pointer', backgroundColor: '#F3E5AB' }}
              onClick={resumeStopwatch}
            >
              Resume
            </Button>
          )}
        </Flex>
      </VStack>
    </Container>
  );
};

export default Home;
