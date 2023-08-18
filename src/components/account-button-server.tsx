import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AccountButtonClient from "./account-button-client";
import Link from "next/link";
import { IoPersonCircleSharp } from "react-icons/io5";

export default async function AccountButtonServer() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const { data: data } = await supabase
    .from("accounts")
    .select("name").single()

  return (
    <Link
      className='bg-white/50 flex items-center justify-center space-x-2 rounded-3xl p-4'
      href={`/account`}
    >
      <div>
        <IoPersonCircleSharp />
      </div>
      <AccountButtonClient session={session} username={data?.name} />
    </Link>
  )

}