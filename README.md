# DAW Frontend - Vehicle Fleet UI

Frontend for a vehicle fleet system built with React, TypeScript, and Vite. The project includes a small design system, a layered architecture, and pages for browsing and administering vehicles.

## Highlights

- Mini design system under `src/components` with reusable UI building blocks and typography scales.
- Feature pages for dashboard, vehicle listing, details, and admin flows (register/update).
- Clear separation of concerns: API client, services, hooks, routes, pages, and components.

## Mini Design System

Reusable components are centralized in `src/components` and exported through `src/components/index.tsx`.

- **Typography:** `TextCustom` provides `heading`, `regular`, `small`, and `button` variants.
- **Form controls:** `Input`, `Select`, and `Form` encapsulate validation states and consistent spacing.
- **UI primitives:** `Button` (variants: `primary`, `secondary`, `muted`) and `Card` for vehicle data.
- **Layout:** `Layout`, `Header`, `Footer`, and `AdminSidePanel` establish the shell and navigation.

Styling is implemented with Tailwind CSS utility classes and a consistent palette used across components.

## Architecture

The codebase follows a simple layered structure:

```
src/
  api/            # Axios client configuration
  services/       # API domain services (vehicles, operations)
  hooks/          # Feature hooks (e.g. useVehicle)
  components/     # Design system components
  pages/          # Route-level screens
  routes/         # Route configuration and router setup
```

- **API layer:** `src/api/client.ts` configures Axios with JSON headers.
- **Services:** `src/services` wraps HTTP calls (e.g. `/ms-vehicles/api/vehicles`).
- **Hooks:** `src/hooks/useVehicle.ts` provides data fetching and state handling.
- **Routes:** `src/routes` defines nested routes and the `Layout` shell.
- **Pages:** `src/pages` contain feature screens.

Path alias `@/*` maps to `src/*` (configured in `tsconfig.app.json`).

## Pages and Routes

Routes are defined in `src/routes/routes.tsx` and rendered by `src/routes/AppRouter.tsx`.

- `/` - Home dashboard (fleet overview metrics)
- `/vehicles` - Vehicle listing
- `/vehicles/:id` - Vehicle detail
- `/admin/register` - Register vehicle
- `/admin/update/:id` - Update vehicle

## Domain Types

Vehicle types are defined in `public/type.ts` and re-exported from `public/index.ts` for shared usage.

## Tech Stack

- React 19 + TypeScript
- Vite
- React Router
- Axios
- Tailwind CSS
- React Toastify

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run lint:fix
npm run prettier
npm run prettier:fix
```
