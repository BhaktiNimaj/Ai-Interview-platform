import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

async function Page() {
    const user = await getCurrentUser();

    if (!user?.id || !user?.name) return null; // ✅ Skip rendering until user is loaded

    return (
        <>
            <h3>Interview Generation</h3>

            <Agent userName={user.name} userId={user.id} type="generate" /> {/* ✅ No `?` or `!` needed */}
        </>
    );
}

export default Page;
