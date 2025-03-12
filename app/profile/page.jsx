"use client" // Marks this as a client-side component in Next.js

import { useState, useEffect } from "react"
import styles from "./page.module.css" // CSS module for styling

export default function ProfilePage() {
	// State for tracking the current tab
	const [currentTab, setCurrentTab] = useState("profile")

	// State for profile data
	const [profile, setProfile] = useState({
		name: "",
		age: "",
		weight: "",
		height: "",
		goals: "",
	})

	// State for settings data
	const [settings, setSettings] = useState({
		notifications: true,
		theme: "light",
		units: "kg",
	})

	// Simulate fetching initial data when the component mounts
	useEffect(() => {
		// In a real app, this would fetch data from an API or context
		setProfile({
			name: "John Doe",
			age: 30,
			weight: 70,
			height: 180,
			goals: "Lose weight",
		})
		setSettings({
			notifications: true,
			theme: "light",
			units: "kg",
		})
	}, [])

	// Handler to update profile fields dynamically
	const handleProfileChange = (field) => (e) => {
		setProfile({ ...profile, [field]: e.target.value })
	}

	// Handler to save profile data
	const handleProfileSave = (e) => {
		e.preventDefault()
		// Basic validation
		if (
			!profile.name ||
			!profile.age ||
			!profile.weight ||
			!profile.height ||
			!profile.goals
		) {
			alert("Please fill all fields")
			return
		}
		// In a real app, this would send data to an API
		console.log("Profile saved:", profile)
		alert("Profile saved successfully")
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Profile & Settings</h1>

			{/* Tab Navigation */}
			<div className={styles.tabs}>
				<button
					onClick={() => setCurrentTab("profile")}
					className={currentTab === "profile" ? styles.activeTab : styles.tab}
				>
					Profile
				</button>
				<button
					onClick={() => setCurrentTab("settings")}
					className={currentTab === "settings" ? styles.activeTab : styles.tab}
				>
					Settings
				</button>
			</div>

			{/* Profile Tab */}
			{currentTab === "profile" && (
				<form onSubmit={handleProfileSave} className={styles.form}>
					<label className={styles.label}>
						Name:
						<input
							type="text"
							value={profile.name}
							onChange={handleProfileChange("name")}
							className={styles.input}
						/>
					</label>
					<label className={styles.label}>
						Age:
						<input
							type="number"
							value={profile.age}
							onChange={handleProfileChange("age")}
							className={styles.input}
						/>
					</label>
					<label className={styles.label}>
						Weight (kg):
						<input
							type="number"
							value={profile.weight}
							onChange={handleProfileChange("weight")}
							className={styles.input}
						/>
					</label>
					<label className={styles.label}>
						Height (cm):
						<input
							type="number"
							value={profile.height}
							onChange={handleProfileChange("height")}
							className={styles.input}
						/>
					</label>
					<label className={styles.label}>
						Fitness Goals:
						<textarea
							value={profile.goals}
							onChange={handleProfileChange("goals")}
							className={styles.textarea}
						/>
					</label>
					<button type="submit" className={styles.saveButton}>
						Save Profile
					</button>
				</form>
			)}

			{/* Settings Tab */}
			{currentTab === "settings" && (
				<div className={styles.settings}>
					<label className={styles.label}>
						Notifications:
						<input
							type="checkbox"
							checked={settings.notifications}
							onChange={() =>
								setSettings({
									...settings,
									notifications: !settings.notifications,
								})
							}
							className={styles.checkbox}
						/>
					</label>
					<label className={styles.label}>
						Theme:
						<select
							value={settings.theme}
							onChange={(e) =>
								setSettings({ ...settings, theme: e.target.value })
							}
							className={styles.select}
						>
							<option value="light">Light</option>
							<option value="dark">Dark</option>
						</select>
					</label>
					<label className={styles.label}>
						Units:
						<select
							value={settings.units}
							onChange={(e) =>
								setSettings({ ...settings, units: e.target.value })
							}
							className={styles.select}
						>
							<option value="kg">Kilograms</option>
							<option value="lbs">Pounds</option>
						</select>
					</label>
				</div>
			)}
		</div>
	)
}
