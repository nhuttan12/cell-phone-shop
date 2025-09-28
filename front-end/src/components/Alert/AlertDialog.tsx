import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';

// AlertDialog props
interface AlertProps {
	message: string;
	type: AlertType;
}

// AlertDialog types
type AlertType = 'success' | 'info' | 'error';

export default function AlertDialog(props: AlertProps) {
	return (
		<div className='grid w-full max-w-xl items-start gap-4'>
			{/*1. If the type is Success*/}
			{props.type === 'success' && (
				<Alert>
					<CheckCircle2Icon />
					<AlertTitle>
						Success! Your changes have been saved
					</AlertTitle>
					<AlertDescription>
						This is an alert with icon, title and description.
					</AlertDescription>
				</Alert>
			)}

			{/*2. If the type is Info*/}
			{props.type === 'info' && (
				<Alert>
					<PopcornIcon />
					<AlertTitle>
						This Alert has a title and an icon. No description.
					</AlertTitle>
				</Alert>
			)}

			{/*3. If the type is Error*/}
			{props.type === 'error' && (
				<Alert variant='destructive'>
					<AlertCircleIcon />
					<AlertTitle>Unable to process your payment.</AlertTitle>
					<AlertDescription>
						<p>
							Please verify your billing information and try
							again.
						</p>
						<ul className='list-inside list-disc text-sm'>
							<li>Check your card details</li>
							<li>Ensure sufficient funds</li>
							<li>Verify billing address</li>
						</ul>
					</AlertDescription>
				</Alert>
			)}
		</div>
	);
}
