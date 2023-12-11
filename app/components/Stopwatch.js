// index.js 
'use client'
import { useState, useRef, useEffect } from 'react'; 
import { Container, Flex, Icon, Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

const styles = { 
	container: { 
		display: 'flex', 
		flexDirection: 'column', 
		alignItems: 'center', 
		justifyContent: 'center', 
		minHeight: '100vh', 
	}, 
	title: { 
		fontSize: '25px', 
		color: 'whitesmoke', 
		marginBottom: '10px', 
		fontFamily: 'Arial, sans-serif', 
	},  
	subtitle: {
		fontSize: '15px', 
		color: 'whitesmoke', 
		marginBottom: '10px', 
		fontFamily: 'Arial, sans-serif', 
	},
	time: { 
		fontSize: '64px', 
		color: 'whitesmoke', 
		fontWeight: 'bold', 
		marginBottom: '20px', 
		border: '2px solid whitesmoke', 
		borderRadius: '5px',
		padding: '5px', 
	}, 
	buttons: { 
		display: 'flex', 
		gap: '20px',
	}, 
	button: { 
		padding: '10px 20px', 
		borderRadius: '5px', 
		fontSize: '16px', 
		color: '#F34213', 
		cursor: 'pointer', 
		border: 'none', 
		outline: 'none', 
		boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', 
	}, 
	startButton: { 
		backgroundColor: '#F3E5AB', 
	}, 
	resetButton: { 
		backgroundColor: '#F3E5AB', 
	}, 
	resumeButton: { 
		backgroundColor: '#F3E5AB', 
	}, 
	pauseButton: { 
		backgroundColor: '#F3E5AB', 
	}, 
}; 

export default function Home() { 
	const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
	const [running, setRunning] = useState(false); 
	const intervalRef = useRef(null); 
	const startTimeRef = useRef(0); 

	const startStopwatch = () => { 
		startTimeRef.current = Date.now() - (time.hours * 3600 + time.minutes * 60 + time.seconds) * 1000;
		intervalRef.current = setInterval(() => { 
			setTime(prevTime => {
				  const seconds = prevTime.seconds + 1;
				  const minutes = prevTime.minutes + Math.floor(seconds / 60);
				  const hours = prevTime.hours + Math.floor(minutes / 60);
  return {
    hours: hours,
    minutes: minutes % 60,
    seconds: seconds % 60
  };
});
		setRunning(true); 
	}; 

	const pauseStopwatch = () => { 
		clearInterval(intervalRef.current); 
		setRunning(false); 
	}; 

	const resetStopwatch = () => { 
		clearInterval(intervalRef.current); 
		setTime(0); 
		setRunning(false); 
	}; 

	const resumeStopwatch = () => { 
		startTimeRef.current = Date.now() - time * 1000; 
		intervalRef.current = setInterval(() => { 
			setTime(Math.floor((Date.now() - 
				startTimeRef.current) / 1000)); 
		}, 1000); 
		//		startTimeRef.current = Date.now() - (time.hours * 3600 + time.minutes * 60 + time.seconds) * 1000;
// 		intervalRef.current = setInterval(() => { 
// 			setTime(prevTime => {
// 				  const seconds = prevTime.seconds + 1;
// 				  const minutes = prevTime.minutes + Math.floor(seconds / 60);
// 				  const hours = prevTime.hours + Math.floor(minutes / 60);
//   return {
//     hours: hours,
//     minutes: minutes % 60,
//     seconds: seconds % 60
//   };
// });
		setRunning(true); 
	}; 

	useEffect(() => { 
		if (running) { 
			startStopwatch(); 
		} 
		return () => { 
			clearInterval(intervalRef.current); 
		}; 
	}, [running]); 

	return ( 
		<Box>
		<div style={styles.container}> 
			<h1 style={styles.title}> 
				Stopwatch
			</h1> 
			<h2 style={styles.title}>Want A Challenge? - Time Your Reading</h2>
			<div style={styles.time}> 
				{time}s 
			</div> 
			<div style={styles.buttons}> 
				{running ? ( 
					<button style={{ ...styles.button, 
									...styles.pauseButton }} 
							onClick={pauseStopwatch}> 
						Pause 
					</button> 
				) : ( 
					<> 
						<button style={{ ...styles.button, 
										...styles.startButton }} 
								onClick={startStopwatch}> 
							Start 
						</button> 
						<button style={{ ...styles.button, 
										...styles.resetButton }} 
								onClick={resetStopwatch}> 
							Reset 
						</button> 
					</> 
				)} 
				{!running && ( 
					<button style={{ ...styles.button, 
									...styles.resumeButton }} 
							onClick={resumeStopwatch}> 
						Resume 
					</button> 
				)}
			</div> 
		</div> 
		</Box>
	); 
}

