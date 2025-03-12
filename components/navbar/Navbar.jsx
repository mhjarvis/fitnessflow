"use client"
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
import { useState, useRef } from "react"

export default function Navbar() {
	const [expanded, setExpanded] = useState(false)
	const timeoutRef = useRef(null)

	const handleMouseEnter = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}
		setExpanded(true)
	}

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setExpanded(false)
		}, 200) // 200ms delay
	}

	const menuItems = [
		{ name: "Dashboard", path: "/dashboard", icon: <IconHome /> },
		{
			name: "Profile & Settings",
			path: "/profile",
			icon: <IconAdjustmentsCheck />,
		},
		{ name: "Calculators", path: "/calculators", icon: <IconCalculator /> },
		{ name: "Fasting", path: "/fasting", icon: <IconCarrotOff /> },
		{ name: "Workout Builder", path: "/workoutbuilder", icon: <IconRoute /> },
		{ name: "Progress", path: "/progress", icon: <IconTrendingUp3 /> },
		{ name: "Forum", path: "/forum", icon: <IconBrandHipchat /> },
	]

	return (
		<nav
			className={`${styles.navbar} ${
				expanded ? styles.expanded : styles.collapsed
			}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{menuItems.map((item, index) => (
				<div key={index} className={styles.linkContainer}>
					<Link href={item.path} className={styles.linkIcon}>
						{item.icon}
					</Link>
					<div className={styles.linkContainerExpanded}>
						<Link href={item.path} className={styles.linkText}>
							{item.name}
						</Link>
					</div>
				</div>
			))}
		</nav>
	)
}
