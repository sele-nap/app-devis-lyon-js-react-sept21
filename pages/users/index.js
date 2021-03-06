import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { RiFileEditFill } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ClientLayout from "../../components/ClientLayout";

const ListClient = () => {
  const { data, user, role } = useSession();

  const deleteUser = async (id) => {
    if (
      confirm(
        "Voulez vous vraiment supprimer cette fiche client définitivement ?"
      )
    ) {
      await axios.delete(`/api/users/${id}`);
      alert("utilisateur bien supprimé");
      setUsers((estimate) => users.filter((e) => e.id !== id));
    }
  };
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/users").then((res) => setUsers(res.data));
  }, []);
  return (
    <div>
      <Layout
        title={data?.user.role === "admin" ? "Mes Contacts" : "Mon Profil"}
      >
        <ClientLayout>
          <div className="table w-full p-2 mt-8">
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Numéro Client
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </div>
                  </th>
                  <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Nom
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </div>
                  </th>

                  <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Prénom
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </div>
                  </th>

                  <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Nom de la structure
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </div>
                  </th>

                  <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Type de structure
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </div>
                  </th>

                  <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Editer
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </div>
                  </th>

                  <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Suppression
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="border-t">
                {users.map(
                  ({
                    id,
                    firstname,
                    lastname,
                    organizationName,
                    organizationType,
                  }) => (
                    <tr className="w-full text-center border-b my-2" key={id}>
                      <td className="text-sm p-3"> {id}</td>
                      <td className="text-sm p-3"> {firstname}</td>
                      <td className="text-sm p-3"> {lastname}</td>
                      <td className="text-sm p-3"> {organizationName}</td>
                      <td className="text-sm p-3">
                        {" "}
                        {organizationType === "BUISNESS"
                          ? "Entreprise"
                          : organizationType === "INDIVIDUAL"
                          ? "Particulier"
                          : organizationType === "NON_PROFIT_ORGANIZATION"
                          ? "Association"
                          : organizationType === "TOWN_HALL"
                          ? "Collectivité"
                          : null}
                      </td>
                      <td className="border">
                        <Link href={`users/edit/${id}`} passHref>
                          <button className="cursor-pointer my-2">
                            <RiFileEditFill size={25} />
                          </button>
                        </Link>
                      </td>
                      <td className="text-center border my-2">
                        <button
                          className="cursor-pointer"
                          onClick={() => deleteUser(id)}
                        >
                          <RiDeleteBin5Fill size={25} />
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </ClientLayout>
      </Layout>
    </div>
  );
};
export default ListClient;
