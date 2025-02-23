import TestSubPage from "@/components/pages/TestSubPage";
import { TRoute } from "@/types/commonTypes";

/**
 * Header, footer의 layout이 필요없는 페이지
 * 라우트할 페이지의 path, component
 */
export const NOT_LAYOUT_ROUTES: TRoute[] = [
  {
    name: "테스트 서브 페이지",
    path: "/test",
    component: TestSubPage,
  },
];
