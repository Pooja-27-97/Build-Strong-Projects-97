let url = "https://www.boredapi.com/api/activity";
// fetch(url)
// .then((res) => {
//     console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log(data.activity);
// })
// .catch((err) => {
//     console.log(err);
// })


async function getActivity() {
    let res = await fetch(url);
    let data = res.json();
    console.log(data.activity);
}