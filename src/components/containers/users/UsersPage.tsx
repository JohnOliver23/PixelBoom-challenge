
import { StatisticsList } from "./StatisticsList";
import { UserSearch } from "./UserSearch";
import { UsersHeader } from "./UsersHeader";


export default function UsersPage() {
  return (
    <section className="flex flex-col gap-5">
      <UsersHeader />
      <StatisticsList />
      <UserSearch />
    </section>
  )
}
