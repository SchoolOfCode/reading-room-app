// index.js 
import { useState, useRef, useEffect } from 'react'; 

const styles = { 
	container: { 
		display: 'flex', 
		flexDirection: 'column', 
		alignItems: 'center', 
		justifyContent: 'center', 
		minHeight: '100vh', 
	}, 
	title: { 
		fontSize: '36px', 
		color: '#333', 
		marginBottom: '10px', 
		fontFamily: 'Arial, sans-serif', 
	}, 
	subtitle: { 
		fontSize: '24px', 
		marginBottom: '20px', 
		color: '#555', 
		fontFamily: 'Arial, sans-serif', 
	}, 
	time: { 
		fontSize: '64px', 
		color: '#333', 
		fontWeight: 'bold', 
		marginBottom: '20px', 
	}, 
	buttons: { 
		display: 'flex', 
		gap: '20px', 
	}, 
	button: { 
		padding: '10px 20px', 
		borderRadius: '5px', 
		fontSize: '16px', 
		color: 'white', 
		cursor: 'pointer', 
		border: 'none', 
		outline: 'none', 
		boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', 
	}, 
	startButton: { 
		backgroundColor: '#2ecc71', 
	}, 
	resetButton: { 
		backgroundColor: '#e74c3c', 
	}, 
	resumeButton: { 
		backgroundColor: '#3498db', 
	}, 
	pauseButton: { 
		backgroundColor: '#f39c12', 
	}, 
}; 

export default function Home() { 
	const [time, setTime] = useState(0); 
	const [running, setRunning] = useState(false); 
	const intervalRef = useRef(null); 
	const startTimeRef = useRef(0); 

	const startStopwatch = () => { 
		startTimeRef.current = Date.now() - time * 100; 
		intervalRef.current = setInterval(() => { 
			setTime(Math.floor((Date.now() - startTimeRef.current) / 1000)); 
		}, 1000); 
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
		<div style={styles.container}> 
			<h1 style={styles.title}> 
				Geeksforgeeks 
			</h1> 
			<h2 style={styles.subtitle}> 
				Stop Watch App 
			</h2> 
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
	); 
}

