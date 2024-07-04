
import { useState } from "react";
import { IconMenu2, IconX, IconBook } from "@tabler/icons-react";

function Navbar() {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <nav>
                {/* mobile */}
                <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
                    <div onClick={openNav} className="mobile-navbar__close">
                        <IconX width={30} height={30} />
                    </div>
                    <ul className="mobile-navbar__links">
                        <li>

                            خانه

                        </li>
                        <li>

                            درباره ما

                        </li>

                        <li>
                            شرایط
                        </li>
                        <li>
                            ارتباط با ما
                        </li>
                        <li>
                            اهدا کتاب
                        </li>
                    </ul>
                </div>

                {/* desktop */}

                <div className="navbar">
                    <div className="navbar__logo">
                        <p>کتاب یار</p>
                        <IconBook />

                    </div>
                    <ul className="navbar__links">
                        <li>

                            خانه

                        </li>
                        <li>

                            درباره ما

                        </li>

                        <li>
                            شرایط
                        </li>
                        <li>
                            ارتباط با ما
                        </li>
                        <li>
                            اهدا کتاب
                        </li>
                    </ul>
                    <div className="navbar__buttons ">
                        ثبت نام
                        <div className="navbar__buttons__register">
                            ورود
                        </div>

                    </div>

                    {/* mobile */}
                    <div className="mobile-hamb" onClick={openNav}>
                        <IconMenu2 width={30} height={30} />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
