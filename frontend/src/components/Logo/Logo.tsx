import "./Logo.css";

interface LogoProps {
    subtitle?: string;
}

function Logo({ subtitle }: LogoProps) {

    return (

        <div className="logo">

            <h1>

                Escape From Neural Labs

            </h1>

            {

                subtitle &&

                <p>{subtitle}</p>

            }

        </div>

    );

}

export default Logo;