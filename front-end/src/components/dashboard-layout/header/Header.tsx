import { LogoutButton } from './LogoutButton'
import { GlobalLoader } from './GlobalLoader'
import { Profile } from './profile/Profile'

export const Header = () => {
	return (
		<header>
			<GlobalLoader />
			<Profile />
			<LogoutButton/>
		</header>
	)
}
