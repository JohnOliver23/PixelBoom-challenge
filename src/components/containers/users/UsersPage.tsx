
import { StatisticsList } from "./StatisticsList";
import { UsersHeader } from "./UsersHeader";


export default function UsersPage() {
  return (
    <section className="flex flex-col gap-5">
      <UsersHeader />
      <StatisticsList />
    </section>
  )
}
