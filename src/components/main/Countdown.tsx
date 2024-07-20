import { useState, useEffect } from "react";

type CountdownProps = {
	month: string;
	date: string;
	time?: string;
};

type TimeLeft = {
	days?: number;
	hours?: number;
	minutes?: number;
	seconds?: number;
} | null;

function calculateCountdown(
	month: string,
	date: string,
	time: string = "00:00"
): TimeLeft {
	const now = new Date();
	const eventTime = new Date(`${month} ${date}, ${now.getFullYear()} ${time}`);
	const timeDifference = eventTime.getTime() - now.getTime();

	if (timeDifference < 0) return null;

	const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
	const seconds = Math.floor((timeDifference / 1000) % 60);

	if (!days) return { hours, minutes, seconds };
	if (!days && !hours) return { minutes, seconds };
	if (days) return { days, hours, minutes, seconds };
	if (days) return { days, hours, minutes, seconds };
}

function Countdown({ month, date, time = "00:00" }: CountdownProps) {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
		calculateCountdown(month, date, time)
	);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimeLeft(calculateCountdown(month, date, time));
		}, 1000);

		return () => clearInterval(intervalId);
	}, [month, date, time]);

	if (!timeLeft) {
		return <span>Event has passed</span>;
	}

	return (
		<span className="flex items-center gap-3 font-poppins">
			{timeLeft.days && <span>{timeLeft.days} d</span>}
			{timeLeft.hours && <span>{timeLeft.hours} h</span>}
			{timeLeft.minutes && <span>{timeLeft.minutes} m</span>}
			{timeLeft.seconds && <span>{timeLeft.seconds} s</span>}

		</span>
	);
}

export default Countdown;
