import { ThemeBadge } from '../components/ThemeBadge/ThemeBadge'
import { LoginForms } from '../components/LoginForms/LoginForms.modules'

export const LoginPage = () => {
    return (
        <>
            <ThemeBadge/>
            <div>
                <LoginForms />
            </div>
        </>
    )
}