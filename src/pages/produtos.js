import { Container } from "react-bootstrap";
import Menu from "./components/navbar";
import Footer from "./components/footer";


export default function Produtos() {
    return <>
        <Menu />
        <Container>
            <h1> Produtos </h1>
            <table class="table table-info table-striped">
            </table>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Data Nascimento </th>
                        <th scope="col"> Nome </th>
                        <th scope="col"> Sobrenome </th>
                        <th scope="col"> Instagram </th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <th scope="row"> 05/10/2006 </th>
                        <td> Anna </td>
                        <td> Anna Luiza Dias</td>
                        <td>@diass.al</td>
                    </tr>
                    <tr>
                        <th scope="row"> 25/10/1980 </th>
                        <td>Macelo</td>
                        <td>Marcelo Perez</td>
                        <td>@marcelo.t.perez</td>
                    </tr>
                    <tr>
                        <th scope="row"> 21/07/2007</th>
                        <td> Renata</td>
                        <td> Renata Matos</td>
                        <td>@reh_mts</td>
                    </tr>
                </tbody>
            </table>
        </Container>
        <Footer />
    </>
}