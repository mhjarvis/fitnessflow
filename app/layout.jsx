"use client"
import "@/assets/styles/global.css"
import Navbar from "@/components/navbar/Navbar"

export default function MainLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	)
}

/* export const metadata = {
	title: "Bear Forge | Workout App",
	description: "A Workout App for Bears",
	keywords: "workout, fasting, planner, workout creation, workout tracking",
}
 */
