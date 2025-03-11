import styles from "./Navbar.module.css"
import Link from "next/link"
import {
	IconHome,
	IconAdjustmentsCheck,
	IconCalculator,
	IconCarrotOff,
	IconRoute,
	IconTrendingUp3,
	IconBrandHipchat,
} from "@tabler/icons-react"
import { useState } from "react"

export default function Navbar() {
	const [expanded, setExpanded] = useState(false)

	const toggleExpanded = () => {
		setExpanded((prev) => !prev)
	}

	const menuItems = [
		{ name: "Dashboard", path: "/dashboard", icon: <IconHome /> },
		{
			name: "Profile & Settings",
			path: "/profile",
			icon: <IconAdjustmentsCheck size={24} />,
		},
		{ name: "Calculators", path: "/calculators", icon: <IconCalculator /> },
		{ name: "Fasting", path: "/fasting", icon: <IconCarrotOff /> },
		{ name: "Workout Builder", path: "/workoutbuilder", icon: <IconRoute /> },
		{ name: "Progress", path: "/progress", icon: <IconTrendingUp3 /> },
		{ name: "Forum", path: "/forum", icon: <IconBrandHipchat /> },
	]
	return (
		/* provide animation effect to entire menu on hover */
		<nav
			className={`${styles.navbar} ${expanded ? styles.expanded : ""}`}
			onMouseEnter={toggleExpanded}
			onMouseLeave={toggleExpanded}
		>
			{/* Menu Items */}
			{menuItems.map((item, index) => (
				<Link key={index} href={item.path}>
					{item.icon}
				</Link>
			))}
			{/* <Link href="/dashboard">
			{/* 			<h1 className="">Welcome to the home page</h1>
			<Link href="/dashboard">Dashboard</Link>
			<Link href="/profile">Profile & Settings</Link>
			<Link href="/calculators">Calculators</Link>
			<Link href="/fasting">Fasting</Link>
			<Link href="/workoutbuilder">Workout Builder</Link>
			<Link href="/progress">Progress</Link>
			<Link href="/forum">Forum</Link> */}
			{/* 			<Link href="/profile">{menuItems[0].icon}</Link>
			 */}{" "}
		</nav>
	)
}
