import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>IPC Hackathon</title>
			</Head>
			<main className={styles.main}>
				<div className={styles.island}>
					<div className={styles.navbar}>
						<h1>IPC Hackathon</h1>
						<div className={styles.navbarLinks}>
							<Link href="/#info" scroll={false}>
								Info
							</Link>
							<Link href="/#faq" scroll={false}>
								FAQ
							</Link>
							<Link href="/#schedule" scroll={false}>
								Schedule
							</Link>
							<Link href="/#register" scroll={false}>
								Register
							</Link>
						</div>
					</div>
					<div className={styles.content}>
						<div className={styles.intro}>
							<h1>we love hacking</h1>
							<p>January 11th - 14th</p>
							<button onClick={() => alert("WIP")}>Join The Discord!</button>
						</div>
						<div className={styles.info} id="info">
							<h1>Info</h1>
							<p>WIP</p>
						</div>
						<div className={styles.faq} id="faq">
							<h1>FAQ</h1>
							<p>WIP</p>
						</div>
						<div className={styles.schedule} id="schedule">
							<h1>Schedule</h1>
							<p>WIP</p>
						</div>
						<div className={styles.register} id="register">
							<h1>Register</h1>
							<p>WIP</p>
						</div>
					</div>
					<footer className={styles.footer}>Made with ❤️ by project dev</footer>
				</div>
			</main>
		</>
	);
}
