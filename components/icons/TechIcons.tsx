import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
  size?: number;
}

export function DatabricksIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 2L28 9.5V17L16 24.5L4 17V9.5L16 2Z" fill="url(#db-grad)" opacity="0.9"/>
      <path d="M16 8L24 12.5V17L16 21.5L8 17V12.5L16 8Z" fill="white" opacity="0.15"/>
      <path d="M16 11L21 13.8V19L16 21.8L11 19V13.8L16 11Z" fill="white" opacity="0.3"/>
      <defs>
        <linearGradient id="db-grad" x1="4" y1="2" x2="28" y2="24.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C6FF"/>
          <stop offset="1" stopColor="#0072FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function MicrosoftFabricIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="2" y="2" width="13" height="13" rx="2" fill="#00C6FF" opacity="0.8"/>
      <rect x="17" y="2" width="13" height="13" rx="2" fill="#0072FF" opacity="0.8"/>
      <rect x="2" y="17" width="13" height="13" rx="2" fill="#7B2FF7" opacity="0.8"/>
      <rect x="17" y="17" width="13" height="13" rx="2" fill="#C026B0" opacity="0.8"/>
    </svg>
  );
}

export function AzureIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M13.5 4L4 26H12L16 14L20 26H28L18.5 4H13.5Z" fill="url(#azure-grad)"/>
      <path d="M12 26L20 14L24 26" fill="url(#azure-grad2)" opacity="0.6"/>
      <defs>
        <linearGradient id="azure-grad" x1="4" y1="4" x2="28" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C6FF"/>
          <stop offset="1" stopColor="#0072FF"/>
        </linearGradient>
        <linearGradient id="azure-grad2" x1="12" y1="14" x2="24" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0072FF"/>
          <stop offset="1" stopColor="#7B2FF7"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PowerBIIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="16" width="6" height="12" rx="1" fill="#F2C811" opacity="0.9"/>
      <rect x="13" y="10" width="6" height="18" rx="1" fill="#F2C811"/>
      <rect x="22" y="4" width="6" height="24" rx="1" fill="#F2C811" opacity="0.7"/>
    </svg>
  );
}

export function PythonIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 3C11 3 8 5 8 8V12H16V13H5C2.5 13 2 15 2 16C2 17 2.5 19 5 19H8V23C8 26 11 28 16 28C21 28 24 26 24 23V19H16V18H27C29.5 18 30 16 30 16C30 15 29.5 13 27 13H24V8C24 5 21 3 16 3Z" fill="url(#py-grad)"/>
      <circle cx="13" cy="8.5" r="1.5" fill="white" opacity="0.8"/>
      <circle cx="19" cy="23.5" r="1.5" fill="white" opacity="0.8"/>
      <defs>
        <linearGradient id="py-grad" x1="2" y1="3" x2="30" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C6FF"/>
          <stop offset="1" stopColor="#0072FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SparkIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 3L19 12H28L21 17.5L24 27L16 21.5L8 27L11 17.5L4 12H13L16 3Z" fill="url(#spark-grad)"/>
      <defs>
        <linearGradient id="spark-grad" x1="4" y1="3" x2="28" y2="27" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B35"/>
          <stop offset="1" stopColor="#F7931E"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DeltaLakeIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 4L28 26H4L16 4Z" fill="none" stroke="url(#delta-grad)" strokeWidth="2.5"/>
      <path d="M16 10L24 22H8L16 10Z" fill="url(#delta-grad)" opacity="0.4"/>
      <defs>
        <linearGradient id="delta-grad" x1="4" y1="4" x2="28" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C6FF"/>
          <stop offset="1" stopColor="#7B2FF7"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function MLflowIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="8" cy="16" r="4" fill="#00C6FF" opacity="0.8"/>
      <circle cx="24" cy="8" r="4" fill="#7B2FF7" opacity="0.8"/>
      <circle cx="24" cy="24" r="4" fill="#0072FF" opacity="0.8"/>
      <path d="M12 16L20 10" stroke="#00C6FF" strokeWidth="1.5" opacity="0.5"/>
      <path d="M12 16L20 22" stroke="#0072FF" strokeWidth="1.5" opacity="0.5"/>
    </svg>
  );
}

export function OpenAIIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M28.2 13.1C28.8 11.5 28.6 9.7 27.5 8.3C26 6.3 23.5 5.5 21.2 6.2C20.1 4.8 18.4 4 16.6 4C14.1 4 11.9 5.5 11.1 7.8C9.4 8.2 7.9 9.2 7 10.8C5.6 12.8 5.8 15.4 7.1 17.3C6.5 18.9 6.7 20.7 7.8 22.1C9.3 24.1 11.8 24.9 14.1 24.2C15.2 25.6 16.9 26.4 18.7 26.4C21.2 26.4 23.4 24.9 24.2 22.6C25.9 22.2 27.4 21.2 28.3 19.6C29.7 17.6 29.5 15 28.2 13.1Z" stroke="url(#openai-grad)" strokeWidth="1.5" fill="none"/>
      <circle cx="16" cy="15.2" r="3" fill="url(#openai-grad)" opacity="0.6"/>
      <defs>
        <linearGradient id="openai-grad" x1="5.6" y1="4" x2="29.7" y2="26.4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00FFD1"/>
          <stop offset="1" stopColor="#00C6FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LangChainIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="12" width="8" height="8" rx="4" fill="url(#lc-grad1)"/>
      <rect x="12" y="12" width="8" height="8" rx="4" fill="url(#lc-grad2)" opacity="0.7"/>
      <rect x="20" y="12" width="8" height="8" rx="4" fill="url(#lc-grad3)" opacity="0.5"/>
      <rect x="8" y="12" width="4" height="8" fill="url(#lc-grad1)" opacity="0.4"/>
      <rect x="16" y="12" width="4" height="8" fill="url(#lc-grad2)" opacity="0.4"/>
      <defs>
        <linearGradient id="lc-grad1" x1="4" y1="12" x2="12" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C6FF"/>
          <stop offset="1" stopColor="#0072FF"/>
        </linearGradient>
        <linearGradient id="lc-grad2" x1="12" y1="12" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0072FF"/>
          <stop offset="1" stopColor="#7B2FF7"/>
        </linearGradient>
        <linearGradient id="lc-grad3" x1="20" y1="12" x2="28" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7B2FF7"/>
          <stop offset="1" stopColor="#C026B0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DbtIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 4C9.4 4 4 9.4 4 16C4 22.6 9.4 28 16 28C22.6 28 28 22.6 28 16C28 9.4 22.6 4 16 4Z" fill="url(#dbt-grad)" opacity="0.15"/>
      <path d="M16 4C9.4 4 4 9.4 4 16" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M16 28C22.6 28 28 22.6 28 16" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M10 10L22 22M22 10L10 22" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <defs>
        <linearGradient id="dbt-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B35"/>
          <stop offset="1" stopColor="#F7931E"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AzureAIIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="16" cy="16" r="6" fill="url(#aai-grad)" opacity="0.8"/>
      <circle cx="16" cy="16" r="10" stroke="url(#aai-grad)" strokeWidth="1" opacity="0.4" fill="none"/>
      <circle cx="16" cy="16" r="14" stroke="url(#aai-grad)" strokeWidth="0.5" opacity="0.2" fill="none"/>
      <circle cx="16" cy="6" r="2" fill="#00C6FF" opacity="0.8"/>
      <circle cx="26" cy="16" r="2" fill="#0072FF" opacity="0.8"/>
      <circle cx="16" cy="26" r="2" fill="#7B2FF7" opacity="0.8"/>
      <circle cx="6" cy="16" r="2" fill="#C026B0" opacity="0.8"/>
      <defs>
        <linearGradient id="aai-grad" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C6FF"/>
          <stop offset="0.5" stopColor="#0072FF"/>
          <stop offset="1" stopColor="#7B2FF7"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AzureDevOpsIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 10L12 4L28 12L28 20L20 28L4 20L4 10Z" fill="url(#ado-grad)" opacity="0.15"/>
      <path d="M4 10L12 4L28 12" stroke="url(#ado-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 12L28 20L20 28L4 20L4 10" stroke="url(#ado-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="16" r="3" fill="url(#ado-grad)"/>
      <defs>
        <linearGradient id="ado-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C6FF"/>
          <stop offset="1" stopColor="#7B2FF7"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function UnityCatalogIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="16" cy="10" rx="12" ry="4" stroke="url(#uc-grad)" strokeWidth="1.5" fill="none"/>
      <path d="M4 10V22C4 24.2 9.4 26 16 26C22.6 26 28 24.2 28 22V10" stroke="url(#uc-grad)" strokeWidth="1.5"/>
      <path d="M4 16C4 18.2 9.4 20 16 20C22.6 20 28 18.2 28 16" stroke="url(#uc-grad)" strokeWidth="1.5" opacity="0.5"/>
      <defs>
        <linearGradient id="uc-grad" x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C6FF"/>
          <stop offset="1" stopColor="#0072FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Service icons for ServicesGrid
export function DataArchitectureIcon({ className, size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="4" width="10" height="10" rx="2" stroke="url(#da-grad)" strokeWidth="1.5" fill="url(#da-grad)" fillOpacity="0.1"/>
      <rect x="15" y="4" width="10" height="10" rx="2" stroke="url(#da-grad)" strokeWidth="1.5" fill="url(#da-grad)" fillOpacity="0.1"/>
      <rect x="26" y="4" width="10" height="10" rx="2" stroke="url(#da-grad)" strokeWidth="1.5" fill="url(#da-grad)" fillOpacity="0.1"/>
      <rect x="10" y="26" width="20" height="10" rx="2" stroke="url(#da-grad)" strokeWidth="1.5" fill="url(#da-grad)" fillOpacity="0.2"/>
      <path d="M9 14V20H31V14" stroke="url(#da-grad)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 20V26" stroke="url(#da-grad)" strokeWidth="1.5" strokeLinecap="round"/>
      <defs>
        <linearGradient id="da-grad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C6FF"/>
          <stop offset="1" stopColor="#0072FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DataEngineeringIcon({ className, size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="8" cy="20" r="4" stroke="url(#de-grad)" strokeWidth="1.5" fill="url(#de-grad)" fillOpacity="0.1"/>
      <circle cx="32" cy="20" r="4" stroke="url(#de-grad)" strokeWidth="1.5" fill="url(#de-grad)" fillOpacity="0.1"/>
      <path d="M12 20H17M23 20H28" stroke="url(#de-grad)" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="17" y="14" width="6" height="12" rx="2" stroke="url(#de-grad)" strokeWidth="1.5" fill="url(#de-grad)" fillOpacity="0.2"/>
      <path d="M20 8V12M20 28V32" stroke="url(#de-grad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <defs>
        <linearGradient id="de-grad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C6FF"/>
          <stop offset="1" stopColor="#7B2FF7"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AnalyticsIcon({ className, size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M6 32L14 20L20 26L28 14L34 18" stroke="url(#an-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="14" cy="20" r="2.5" fill="#00C6FF"/>
      <circle cx="20" cy="26" r="2.5" fill="#0072FF"/>
      <circle cx="28" cy="14" r="2.5" fill="#7B2FF7"/>
      <line x1="6" y1="32" x2="34" y2="32" stroke="url(#an-grad)" strokeWidth="1" opacity="0.3"/>
      <defs>
        <linearGradient id="an-grad" x1="6" y1="32" x2="34" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C6FF"/>
          <stop offset="1" stopColor="#7B2FF7"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AIIcon({ className, size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="20" cy="20" r="6" stroke="url(#ai-grad)" strokeWidth="1.5" fill="url(#ai-grad)" fillOpacity="0.15"/>
      <circle cx="20" cy="8" r="3" fill="url(#ai-grad)" opacity="0.7"/>
      <circle cx="20" cy="32" r="3" fill="url(#ai-grad)" opacity="0.7"/>
      <circle cx="8" cy="20" r="3" fill="url(#ai-grad)" opacity="0.7"/>
      <circle cx="32" cy="20" r="3" fill="url(#ai-grad)" opacity="0.7"/>
      <path d="M20 14V26M14 20H26" stroke="url(#ai-grad)" strokeWidth="1" opacity="0.4"/>
      <path d="M20 11V14M20 26V29M11 20H14M26 20H29" stroke="url(#ai-grad)" strokeWidth="1.5" strokeLinecap="round"/>
      <defs>
        <linearGradient id="ai-grad" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00FFD1"/>
          <stop offset="0.5" stopColor="#0072FF"/>
          <stop offset="1" stopColor="#7B2FF7"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CloudDevOpsIcon({ className, size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 24C7.2 24 5 21.8 5 19C5 16.2 7.2 14 10 14C10.3 14 10.6 14 10.9 14.1C11.8 11.7 14.2 10 17 10C20.5 10 23.3 12.6 23.5 16C24 16 24.5 16 25 16C27.8 16 30 18.2 30 21C30 23.8 27.8 26 25 26H10" stroke="url(#cd-grad)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M20 30V22M17 27L20 30L23 27" stroke="url(#cd-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="cd-grad" x1="5" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C6FF"/>
          <stop offset="1" stopColor="#7B2FF7"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AcademyIcon({ className, size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 8L36 16L20 24L4 16L20 8Z" stroke="url(#ac-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="url(#ac-grad)" fillOpacity="0.1"/>
      <path d="M10 20V28C10 28 14 32 20 32C26 32 30 28 30 28V20" stroke="url(#ac-grad)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M36 16V24" stroke="url(#ac-grad)" strokeWidth="1.5" strokeLinecap="round"/>
      <defs>
        <linearGradient id="ac-grad" x1="4" y1="8" x2="36" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C6FF"/>
          <stop offset="1" stopColor="#C026B0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
