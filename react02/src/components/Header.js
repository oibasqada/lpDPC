import Button from "./Button";

const Header = () => {
    return (
        <div className={'container'}>
            <div className="header-wrapper">
                <div className="logo-links">
                    <div className="logo">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z" fill="#F2994A"/>
                            <rect x="11" y="11" width="14" height="6" rx="2" fill="white"/>
                            <rect x="11" y="19" width="14" height="6" rx="2" fill="white"/>
                        </svg>
                    </div>
                    <div className="head-links">
                        <a href="#">ABOUT</a>
                        <a href="#">GALLERY</a>
                        <a href="#">PRICING</a>
                        <a href="#">FAQ</a>
                        <a href="#">BENEFITS</a>
                    </div>
                </div>
                <div className="head-buttons">
                    <Button
                        title={'Sign In'}
                    />
                    <Button
                        title={'Sign Up'}
                        variant={'filled-btn'}
                    />

                </div>
            </div>
        </div>
    )
}

export default Header