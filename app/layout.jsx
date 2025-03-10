import "@/assets/styles/global.css"

export default function MainLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div>{children}</div>
			</body>
		</html>
	)
}
