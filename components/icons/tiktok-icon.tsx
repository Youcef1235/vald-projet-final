import type { SVGProps } from "react"

export function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M12 2.00098C8.68629 2.00098 6 4.68727 6 8.00098V14.001C6 15.6578 7.34315 17.001 9 17.001H10V20.001C10 21.1055 10.8954 22.001 12 22.001C13.1046 22.001 14 21.1055 14 20.001V17.001H15C16.6569 17.001 18 15.6578 18 14.001V8.00098C18 4.68727 15.3137 2.00098 12 2.00098ZM12 4.00098C14.2091 4.00098 16 5.79182 16 8.00098V11.001H8V8.00098C8 5.79182 9.79086 4.00098 12 4.00098Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}
