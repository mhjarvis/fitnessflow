import "@/assets/styles/global.css"

export const metadata = {
	title: "Bear Forge | Workout App",
	description: "A Workout App for Bears",
	keywords: "workout, fasting, planner, workout creation, workout tracking",
}

export default function MainLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div>{children}</div>
			</body>
		</html>
	)
}
