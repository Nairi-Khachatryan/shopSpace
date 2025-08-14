import { useTheme } from '../../hooks/useTheme'
import s from './Profile.module.scss'

export const Profile = () => {
  const {theme} = useTheme()
  return (
    <div className={`${s[`container-${theme}`]}`}>
      Profile
    </div>
  )
}

