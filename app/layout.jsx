import "@/assets/styles/global.css"
import styles from "./layout.module.css"
import Navbar from "@/components/navbar/Navbar"

export default function MainLayout({ children }) {
	return (
		<html lang="en">
			<body className={styles.container}>
				<Navbar className={styles.navbar} />
				<main className={styles.mainContent}>{children}</main>
			</body>
		</html>
	)
}

export const metadata = {
	title: "Fitness Flow | Workout App",
	description: "A Workout App for Bears",
	keywords: "workout, fasting, planner, workout creation, workout tracking",
}
