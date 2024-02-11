'use client'
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'

export default function Modal({ children }: { children: React.ReactNode }) {
	const overlay = useRef(null)
	const wrapper = useRef(null)
	const router = useRouter()

	// const onDismiss = useCallback(() => {
	// 	router.back()
	// }, [router])

	// const onClick: MouseEventHandler = useCallback(
	// 	(e) => {
	// 		if (e.target === overlay.current || e.target === wrapper.current) {
	// 			if (onDismiss) onDismiss()
	// 		}
	// 	},
	// 	[onDismiss, overlay, wrapper]
	// )

	// const onKeyDown = useCallback(
	// 	(e: KeyboardEvent) => {
	// 		if (e.key === 'Escape') onDismiss()
	// 	},
	// 	[onDismiss]
	// )

	// useEffect(() => {
	// 	document.addEventListener('keydown', onKeyDown)
	// 	return () => document.removeEventListener('keydown', onKeyDown)
	// }, [onKeyDown])

	return (
		<div
			ref={overlay}
			style={{
				position: "fixed",
				zIndex: 10,
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				margin: "0 auto",
				backgroundColor: "rgba(0, 0, 0, 0.6)",
			}}
			// onClick={onClick}
		>
			<div
				ref={wrapper}
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "100%",
					height: '100%',
					padding: "24px",
				}}
			>
				{children}
			</div>
		</div>
	)
}