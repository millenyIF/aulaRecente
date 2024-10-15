import {Container} from "react-bootstrap"
import style from "@/styles/Footer.module.css"

export default function Footer() {
    return <>
    <Container className={`${style.degradefooter} position-button bottom-0 start-50 rounded-2`}>
        <footer className="px-3 text-light rounded">
            <ul className="nav justify-content-center border-bottom pb-1 mb-2 ">
                <li className="nav-item">Disciplina de FrameWorks2</li>
            </ul>
            <p className="text-center ">&copy; 2024 IFMS</p>
        </footer>
    </Container>
    </>
}

