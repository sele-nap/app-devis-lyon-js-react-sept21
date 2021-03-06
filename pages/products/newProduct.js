// import axios from "axios";
// import { useEffect, useState } from "react";
// import Layout from "../../components/Layout";
// import Swal from "sweetalert2";
// import AdminLayout from "../../components/AdminLayout";
// import SaveIcon from "@mui/icons-material/Save";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// import Link from "next/link";

// export default function ProductDetails() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [unitPrice, setUnitPrice] = useState("");

//   const onSubmit = (data) => {
//     axios.post("/api/product", { name, description, unitPrice }).then((res) => {
//       Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Nouveau produit",
//         showConfirmButton: false,
//         timer: 2500,
//       });
//     });
//   };

//   return (
//     <Layout title="Modification du produit">
//       <AdminLayout>
//         <div className="flex flex-col">
//           <div className="flex items-center justify-center w-full">
//             <form>
//               <div className=" -mx-3 mb-6">
//                 <div className="w-full  px-3 mb-4">
//                   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
//                     Désignation
//                   </label>
//                   <input
//                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 </div>
//                 <div className="w-full px-3">
//                   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ">
//                     Description
//                   </label>
//                   <input
//                     className="appearance-none block h-24 w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
//                     type="text"
//                     id="description"
//                     name="description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-wrap -mx-3 mb-6">
//                 <div className="w-full px-3">
//                   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
//                     Prix unitaire HT
//                   </label>
//                   <input
//                     className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
//                     type="number"
//                     id="unitPrice"
//                     name="unitPrice"
//                     value={unitPrice}
//                     onChange={(e) => setUnitPrice(e.target.value)}
//                   />
//                 </div>
//               </div>
//               {/* <Link href="/estimates" passHref> */}
//               <button
//                 onClick={onSubmit}
//                 className="ml-2 shadow w-64 h-12 bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded"
//               >
//                 <SaveIcon />
//                 <span className="mx-2"> Sauvegarde </span>
//               </button>
//               {/* </Link> */}
//             </form>
//           </div>
//           <div className="mt-10 flex justify-center">
//             <Link href="/products" passHref>
//               <button className="ml-2 shadow w-64 h-12 bg-yellow-400 hover:bg-yellow-500 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded">
//                 <ArrowBackIcon />
//                 <span className="mx-2"> Mes produits </span>
//               </button>
//             </Link>
//             <button className="ml-2 shadow w-64 h-12 bg-red-400 hover:bg-red-500 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded">
//               <DeleteForeverIcon />
//               <span className="mx-2"> Suppression </span>
//             </button>
//           </div>
//         </div>
//       </AdminLayout>
//     </Layout>
//   );
// }

export default function ProductsPage() {
  return null;
}
