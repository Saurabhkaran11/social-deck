# Social Deck for iOS: plan

The web app was built so the iOS app can reuse its content. Everything in `lib/content/` is plain TypeScript data with no React or browser code.

## Recommended stack
- **Expo (React Native) + Expo Router.** One TypeScript codebase that reuses `lib/content` directly.
  - Builds for iOS, with Android for free.
  - Docs: https://docs.expo.dev/
- **Storage:** AsyncStorage, or `expo-sqlite` for progress, notes and the checklist, replacing localStorage.
- **Builds and App Store:** EAS Build and EAS Submit. Docs: https://docs.expo.dev/eas/
- **Apple Developer Program:** US$99 a year, required to publish. https://developer.apple.com/programs/

## Steps
1. Move `lib/content` into a shared package, for example a monorepo with `apps/web`, `apps/ios` and `packages/content`.
2. Create the app: `npx create-expo-app@latest social-deck-ios`.
3. Build the screens: Home, Learn, Lesson, Platforms, Safety (checklist and quiz), Tools, Ideas, Calculators, Glossary.
4. Add native extras:
   - Local notifications for a weekly "post and review" reminder, using `expo-notifications`
   - A share sheet for lessons
   - Haptics on quiz answers
5. Test on a device with Expo Go, then with TestFlight.
6. Prepare the App Store listing:
   - Privacy "nutrition label": no data collected if progress stays on the device
   - Screenshots
   - Age rating
7. Submit for App Store review. Read the App Review Guidelines first: https://developer.apple.com/app-store/review/guidelines/

## Keep in sync
- Content changes in `packages/content` update both apps.
- Run `npm run check-links` before each release.
