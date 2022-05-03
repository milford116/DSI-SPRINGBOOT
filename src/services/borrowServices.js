import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/borrow');

}
const remove = id => {
    return httpClient.delete(`/borrow/${id}`);
}
export default { getAll,remove};