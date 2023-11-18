import { createNavigationContainerRef } from "@react-navigation/native";
import { NavigationList } from "../routes";

export const navigatorRef = createNavigationContainerRef<NavigationList>()

export const navigate = navigatorRef.navigate
export const goBack = navigatorRef.goBack
