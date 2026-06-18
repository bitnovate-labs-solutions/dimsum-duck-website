import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { GroupDiningPageContent } from "@/components/pages/GroupDiningPageContent";
import { groupDiningPage } from "@/content/pages";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `Group Dining - ${site.name}`,
  description: groupDiningPage.subheading,
};

export default function GroupDiningPage() {
  return (
    <SiteShell showFixedLogo>
      <GroupDiningPageContent />
    </SiteShell>
  );
}
