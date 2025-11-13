// src/app/lib/location-detection.ts

// Comprehensive list of Saudi cities and towns across all 13 regions
export const SAUDI_CITIES = [
  // Riyadh Region
  'Riyadh', 'Al-Kharj', 'Diriyah', 'Al-Muzahimiyah', 'Thadiq', 'Afif',
  'Al-Majmaah', 'Al-Ghat', 'Rumah', 'Marat', 'Thadig', 'Shaqra',
  'Huraymila', 'Ad-Dawadmi', 'Al-Quway\'iyah', 'Wadi ad-Dawasir',
  'Al-Aflaj', 'As-Sulayyil', 'Hotat Bani Tamim', 'Layla',
  
  // Makkah Region (Holy Sites & Major Cities)
  'Makkah', 'Mecca', 'Jeddah', 'Taif', 'Rabigh', 'Khulais', 'Ranyah',
  'Turubah', 'Jumum', 'Al-Kamil', 'Al-Muwayh', 'Maysan', 'Adham',
  'Al-Lith', 'Thuwal', 'Bahra', 'Khulays', 'Al-Jumum', 'Ash-Shafa',
  'Al-Hada', 'Haddah', 'Ubhur', 'King Abdullah Economic City', 'KAEC',
  
  // Madinah Region (Holy Sites)
  'Madinah', 'Medina', 'Yanbu', 'Al-Ula', 'Mahd Ad-Dahab', 'Badr',
  'Khaybar', 'Al-Hanakiyah', 'Wadi Al-Fara', 'Al-Mahd', 'Yanbu Al-Bahr',
  'Yanbu Al-Nakhal', 'Al-Eis', 'Al-Suqya',
  
  // Eastern Province (Oil & Industry Hub)
  'Dammam', 'Dhahran', 'Khobar', 'Al-Khobar', 'Jubail', 'Al-Jubail',
  'Al-Ahsa', 'Hofuf', 'Al-Hofuf', 'Mubarraz', 'Al-Mubarraz', 'Qatif',
  'Al-Qatif', 'Ras Tanura', 'Khafji', 'Abqaiq', 'Buqayq', 'Al-Nairyah',
  'Qaisumah', 'Al-Qaisumah', 'Hafar Al-Batin', 'Hafr Al-Batin', 'Udhailiyah',
  'Sihat', 'Safwa', 'Saihat', 'Tarout', 'Rahima', 'King Abdullah Economic City',
  
  // Asir Region (Southern Highlands)
  'Abha', 'Khamis Mushait', 'Khamis Mushayt', 'Bisha', 'Muhayil', 'Muhayil Asir',
  'Sarat Abidah', 'Sarat Ubaidah', 'Ahad Rafidah', 'Bareq', 'Majardah', 'Al-Namas',
  'Rijal Almaa', 'Rijal Alma', 'Tanumah', 'Al-Birk', 'Dhahran Al-Janoub',
  
  // Najran Region (Southern Border)
  'Najran', 'Sharurah', 'Sharorah', 'Habuna', 'Badr Al-Janoub', 'Yadamah',
  'Khubash', 'Hurub', 'Thar', 'Al-Kharkhir',
  
  // Jazan Region (Red Sea Coast)
  'Jazan', 'Jizan', 'Sabya', 'Abu Arish', 'Samtah', 'Farasan', 'Farasan Islands',
  'Al-Darb', 'Baish', 'Al-Aydabi', 'Al-Tuwal', 'Damad', 'Ad-Dair', 'Ahad Al-Masarihah',
  'Al-Reith', 'Al-Aridah', 'Fifa', 'Haroob',
  
  // Qassim Region (Agricultural Hub)
  'Buraidah', 'Unaizah', 'Al-Rass', 'Al-Mithnab', 'Al-Badayea', 'Al-Badai',
  'Riyadh Al-Khabra', 'Al-Bukayriyah', 'Dhabiyah', 'Uyun Al-Jiwa', 'Al-Shammasiyyah',
  'Uyaynah', 'Al-Asyah', 'Al-Nabhaniyah',
  
  // Ha'il Region (Northern Highlands)
  'Hail', 'Ha\'il', 'Baqaa', 'Baq\'aa', 'Al-Ghazalah', 'Shamli', 'Al-Shanan',
  'Al-Shunan', 'Mawqaq', 'Al-Sulaymi', 'Samira', 'Al-Kahfah', 'Jubbah',
  
  // Tabuk Region (Northwestern)
  'Tabuk', 'Duba', 'Dhuba', 'Tayma', 'Taima', 'Haql', 'Al-Wajh', 'Umluj',
  'Al-Bad', 'Timaa', 'Tabuk City', 'Al-Ula', 'Neom', 'NEOM',
  
  // Northern Borders Region
  'Arar', 'Rafha', 'Turaif', 'Al-Uwayqilah', 'Al-\'Uwayqilah', 'Turayf',
  'Hazm Al-Jalamid', 'Lina City', 'Al-Suwayr',
  
  // Al-Bahah Region (Mountain Province)
  'Al-Bahah', 'Bahah', 'Baljurashi', 'Al-Mandaq', 'Al-Mikhwah', 'Al-Aqiq',
  'Qilwah', 'Al-Qura', 'Bani Hassan', 'Ghamid Al-Zinad', 'Al-Makhwah',
  
  // Al-Jawf Region (Northern Agricultural)
  'Sakaka', 'Al-Qurayyat', 'Qurayyat', 'Dumat Al-Jandal', 'Dumah',
  'Tabarjal', 'At-Tabarjal', 'Hadithah', 'Suwayr',
  
  // Special Economic Zones & Mega Projects
  'NEOM', 'The Line', 'Oxagon', 'Trojena', 'Sindalah', 'King Abdullah Economic City',
  'KAEC', 'Knowledge Economic City', 'Prince Abdulaziz bin Mousaed Economic City',
  'Jazan Economic City', 'Red Sea Project', 'Amaala', 'Qiddiya', 'Roshn',
  
  // Alternative Spellings & Common Variations
  'Riyadh City', 'Jiddah', 'Jaddah', 'Taef', 'Al-Taif', 'Madinah Al-Munawwarah',
  'Al-Madinah', 'Makkah Al-Mukarramah', 'Holy Makkah', 'Holy Madinah'
]

// Known global cities (for auto-detection)
const GLOBAL_CITIES = [
  'london', 'new york', 'dubai', 'mumbai', 'delhi', 'tokyo', 
  'beijing', 'paris', 'sydney', 'toronto', 'lagos', 'cairo',
  'johannesburg', 'cape town', 'kampala', 'dar es salaam',
  'addis ababa', 'kigali', 'accra', 'dakar', 'abuja', 'nairobi',
  'los angeles', 'chicago', 'singapore', 'hong kong', 'shanghai',
  'berlin', 'madrid', 'rome', 'amsterdam', 'brussels', 'kuwait',
  'kuwait city', 'abu dhabi', 'doha', 'manama', 'muscat', 'amman',
  'beirut', 'baghdad', 'tehran', 'ankara', 'istanbul', 'karachi',
  'lahore', 'islamabad', 'casablanca', 'tunis', 'algiers', 'tripoli'
]

export type LocationContext = 'saudi' | 'other' | 'uncertain'

export interface LocationDetectionResult {
  context: LocationContext
  confidence: 'high' | 'medium' | 'low'
  reason: string
  needsUserConfirmation: boolean
}

/**
 * Smart location detection algorithm for Saudi Arabia
 * Returns detection result with confidence level
 */
export function detectLocationContext(city: string): LocationDetectionResult {
  if (!city || city.trim() === '') {
    return {
      context: 'uncertain',
      confidence: 'low',
      reason: 'No city provided',
      needsUserConfirmation: true
    }
  }

  const normalizedCity = city.toLowerCase().trim()

  // Case 1: Exact match with known Saudi cities
  if (SAUDI_CITIES.some(c => c.toLowerCase() === normalizedCity)) {
    return {
      context: 'saudi',
      confidence: 'high',
      reason: 'Exact match with known Saudi city',
      needsUserConfirmation: false
    }
  }

  // Case 2: Exact match with known global cities
  if (GLOBAL_CITIES.some(c => c.toLowerCase() === normalizedCity)) {
    return {
      context: 'other',
      confidence: 'high',
      reason: 'Exact match with known international city',
      needsUserConfirmation: false
    }
  }

  // Case 3: Partial match with Saudi cities
  if (SAUDI_CITIES.some(c => normalizedCity.includes(c.toLowerCase()) || c.toLowerCase().includes(normalizedCity))) {
    return {
      context: 'saudi',
      confidence: 'medium',
      reason: 'Partial match with Saudi city',
      needsUserConfirmation: true
    }
  }

  // Case 4: Contains "Saudi" or "KSA" keyword
  if (normalizedCity.includes('saudi') || normalizedCity.includes('ksa') || normalizedCity.includes('kingdom')) {
    return {
      context: 'saudi',
      confidence: 'medium',
      reason: 'Contains Saudi Arabia reference',
      needsUserConfirmation: true
    }
  }

  // Case 5: Contains region suffix (Saudi pattern)
  if (normalizedCity.match(/\bregion$/i) || normalizedCity.match(/\b(province|governorate)$/i)) {
    return {
      context: 'saudi',
      confidence: 'medium',
      reason: 'Saudi region/province naming pattern',
      needsUserConfirmation: true
    }
  }

  // Case 6: Holy city references
  if (normalizedCity.includes('holy') || normalizedCity.includes('sacred')) {
    return {
      context: 'saudi',
      confidence: 'medium',
      reason: 'Holy city reference (likely Makkah/Madinah)',
      needsUserConfirmation: true
    }
  }

  // Case 7: Partial match with global cities
  if (GLOBAL_CITIES.some(c => normalizedCity.includes(c) || c.includes(normalizedCity))) {
    return {
      context: 'other',
      confidence: 'medium',
      reason: 'Partial match with international city',
      needsUserConfirmation: true
    }
  }

  // Case 8: Unknown - needs user confirmation
  return {
    context: 'uncertain',
    confidence: 'low',
    reason: 'Unknown location',
    needsUserConfirmation: true
  }
}

/**
 * Validate and process location data
 */
export interface ProcessedLocationData {
  isGlobal: boolean
  locationConfirmation: string | null
  locationVerified: boolean
  locationDetection: string
  needsAdminReview: boolean
}

export function processLocationData(
  city: string,
  userConfirmation?: 'saudi' | 'other'
): ProcessedLocationData {
  const detection = detectLocationContext(city)

  // If user provided confirmation, use it
  if (userConfirmation) {
    return {
      isGlobal: userConfirmation === 'other',
      locationConfirmation: userConfirmation,
      locationVerified: false,
      locationDetection: 'user_confirmed',
      needsAdminReview: detection.confidence !== 'high' // Review if not confident
    }
  }

  // Use auto-detection
  if (detection.confidence === 'high') {
    return {
      isGlobal: detection.context === 'other',
      locationConfirmation: null,
      locationVerified: true, // High confidence = auto-verified
      locationDetection: 'auto',
      needsAdminReview: false
    }
  }

  // Medium or low confidence
  return {
    isGlobal: detection.context === 'other',
    locationConfirmation: null,
    locationVerified: false,
    locationDetection: 'auto',
    needsAdminReview: true
  }
}