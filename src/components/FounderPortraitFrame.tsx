import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ARIFA_PORTRAITS, FounderPortrait } from '../data/founderPortraits';
import {
  Sparkles,
  Sliders,
  RefreshCw,
  Upload,
  Camera,
  Check,
  Eye,
  Crop,
  Layers,
  Wand2,
  Download,
  CheckCircle2,
  FileImage,
  Sun,
  ShieldCheck,
  Heart,
  Aperture,
  Save,
  SlidersHorizontal
} from 'lucide-react';
import { AegisMonogram } from './AegisMonogram';

interface FounderPortraitFrameProps {
  initialPortraitId?: string;
  variant?: 'large' | 'compact' | 'hero';
  showControls?: boolean;
  onSelectPortrait?: (portrait: FounderPortrait) => void;
}

export type BeautyGrade =
  | 'luminous-glow'
  | 'ultra-clarity'
  | 'sunlit-chic'
  | 'vogue-editorial'
  | 'platinum-noir';

export type AspectRatioType = '4:5' | '3:4' | '1:1' | '9:16';

// Storage Key Constants for Reliability
const STORAGE_KEYS = {
  IMAGE: 'aegis_arifa_custom_img',
  FILE_NAME: 'aegis_arifa_file_name',
  FILE_SIZE: 'aegis_arifa_file_size',
  SELECTED_ID: 'aegis_arifa_selected_id',
  BEAUTY_GRADE: 'aegis_arifa_beauty_grade',
  ASPECT_RATIO: 'aegis_arifa_aspect_ratio',
  ZOOM: 'aegis_arifa_zoom',
  POS_Y: 'aegis_arifa_pos_y',
  POS_X: 'aegis_arifa_pos_x',
  SKIN_RADIANCE: 'aegis_arifa_skin_radiance',
  CLARITY: 'aegis_arifa_clarity',
  BRIGHTNESS: 'aegis_arifa_brightness',
  CONTRAST: 'aegis_arifa_contrast',
  WARMTH: 'aegis_arifa_warmth',
  SATURATION: 'aegis_arifa_saturation',
  SOFT_FOCUS_BOKEH: 'aegis_arifa_soft_focus_bokeh',
  VIGNETTE_OPACITY: 'aegis_arifa_vignette_opacity'
} as const;

export const FounderPortraitFrame: React.FC<FounderPortraitFrameProps> = ({
  initialPortraitId = 'architectural-lead',
  variant = 'large',
  showControls = true,
  onSelectPortrait
}) => {
  // Read Initial Values from LocalStorage for 100% Persistent Memory
  const [selectedId, setSelectedId] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.SELECTED_ID) || initialPortraitId;
    } catch {
      return initialPortraitId;
    }
  });

  const [beautyGrade, setBeautyGrade] = useState<BeautyGrade>(() => {
    try {
      return (localStorage.getItem(STORAGE_KEYS.BEAUTY_GRADE) as BeautyGrade) || 'luminous-glow';
    } catch {
      return 'luminous-glow';
    }
  });

  const [aspectRatio, setAspectRatio] = useState<AspectRatioType>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ASPECT_RATIO);
      if (saved && variant !== 'compact') return saved as AspectRatioType;
      return variant === 'compact' ? '1:1' : '4:5';
    } catch {
      return variant === 'compact' ? '1:1' : '4:5';
    }
  });

  // Custom Image Local Upload
  const [customImage, setCustomImage] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.IMAGE);
    } catch {
      return null;
    }
  });

  const [fileName, setFileName] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.FILE_NAME) || null;
    } catch {
      return null;
    }
  });

  const [fileSize, setFileSize] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.FILE_SIZE) || null;
    } catch {
      return null;
    }
  });

  // Beauty & Clarity Tuning Parameters with Persistent Defaults
  const [zoom, setZoom] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ZOOM);
      return saved !== null ? Number(saved) : 124;
    } catch {
      return 124;
    }
  });

  const [posY, setPosY] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.POS_Y);
      return saved !== null ? Number(saved) : 24;
    } catch {
      return 24;
    }
  });

  const [posX, setPosX] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.POS_X);
      return saved !== null ? Number(saved) : 50;
    } catch {
      return 50;
    }
  });

  const [skinRadiance, setSkinRadiance] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SKIN_RADIANCE);
      return saved !== null ? Number(saved) : 115;
    } catch {
      return 115;
    }
  });

  const [clarity, setClarity] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CLARITY);
      return saved !== null ? Number(saved) : 112;
    } catch {
      return 112;
    }
  });

  const [brightness, setBrightness] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BRIGHTNESS);
      return saved !== null ? Number(saved) : 104;
    } catch {
      return 104;
    }
  });

  const [contrast, setContrast] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CONTRAST);
      return saved !== null ? Number(saved) : 108;
    } catch {
      return 108;
    }
  });

  const [warmth, setWarmth] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WARMTH);
      return saved !== null ? Number(saved) : 12;
    } catch {
      return 12;
    }
  });

  const [saturation, setSaturation] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SATURATION);
      return saved !== null ? Number(saved) : 98;
    } catch {
      return 98;
    }
  });

  const [softFocusBokeh, setSoftFocusBokeh] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SOFT_FOCUS_BOKEH);
      return saved !== null ? Number(saved) : 35;
    } catch {
      return 35;
    }
  });

  const [vignetteOpacity, setVignetteOpacity] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.VIGNETTE_OPACITY);
      return saved !== null ? Number(saved) : 35;
    } catch {
      return 35;
    }
  });

  // UI Interactive States
  const [showBefore, setShowBefore] = useState<boolean>(false);
  const [showEditorTools, setShowEditorTools] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [isSavedBadgeVisible, setIsSavedBadgeVisible] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const visibleFileInputRef = useRef<HTMLInputElement>(null);

  const activePortrait =
    ARIFA_PORTRAITS.find((p) => p.id === selectedId) || ARIFA_PORTRAITS[0];

  useEffect(() => {
    if (onSelectPortrait) {
      onSelectPortrait(activePortrait);
    }
  }, [activePortrait, onSelectPortrait]);

  // Comprehensive Real-Time Auto-Save to localStorage on EVERY Slider / Preset / Position update
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BEAUTY_GRADE, beautyGrade);
      if (variant !== 'compact') {
        localStorage.setItem(STORAGE_KEYS.ASPECT_RATIO, aspectRatio);
      }
      localStorage.setItem(STORAGE_KEYS.ZOOM, zoom.toString());
      localStorage.setItem(STORAGE_KEYS.POS_Y, posY.toString());
      localStorage.setItem(STORAGE_KEYS.POS_X, posX.toString());
      localStorage.setItem(STORAGE_KEYS.SKIN_RADIANCE, skinRadiance.toString());
      localStorage.setItem(STORAGE_KEYS.CLARITY, clarity.toString());
      localStorage.setItem(STORAGE_KEYS.BRIGHTNESS, brightness.toString());
      localStorage.setItem(STORAGE_KEYS.CONTRAST, contrast.toString());
      localStorage.setItem(STORAGE_KEYS.WARMTH, warmth.toString());
      localStorage.setItem(STORAGE_KEYS.SATURATION, saturation.toString());
      localStorage.setItem(STORAGE_KEYS.SOFT_FOCUS_BOKEH, softFocusBokeh.toString());
      localStorage.setItem(STORAGE_KEYS.VIGNETTE_OPACITY, vignetteOpacity.toString());

      // Show temporary saved indicator briefly on interaction
      setIsSavedBadgeVisible(true);
      const timer = setTimeout(() => setIsSavedBadgeVisible(false), 2000);

      // Broadcast update across any open tabs or sibling components
      window.dispatchEvent(new CustomEvent('aegis_portrait_sync_event'));

      return () => clearTimeout(timer);
    } catch (e) {
      console.error('Failed to sync portrait state to localStorage:', e);
    }
  }, [
    beautyGrade,
    aspectRatio,
    zoom,
    posY,
    posX,
    skinRadiance,
    clarity,
    brightness,
    contrast,
    warmth,
    saturation,
    softFocusBokeh,
    vignetteOpacity,
    variant
  ]);

  // Synchronize state if another component or tab updates
  const syncFromLocalStorage = useCallback(() => {
    try {
      const savedImg = localStorage.getItem(STORAGE_KEYS.IMAGE);
      if (savedImg !== customImage) setCustomImage(savedImg);

      const savedGrade = localStorage.getItem(STORAGE_KEYS.BEAUTY_GRADE) as BeautyGrade;
      if (savedGrade && savedGrade !== beautyGrade) setBeautyGrade(savedGrade);

      const savedZoom = localStorage.getItem(STORAGE_KEYS.ZOOM);
      if (savedZoom !== null) setZoom(Number(savedZoom));

      const savedPosY = localStorage.getItem(STORAGE_KEYS.POS_Y);
      if (savedPosY !== null) setPosY(Number(savedPosY));

      const savedPosX = localStorage.getItem(STORAGE_KEYS.POS_X);
      if (savedPosX !== null) setPosX(Number(savedPosX));

      const savedRadiance = localStorage.getItem(STORAGE_KEYS.SKIN_RADIANCE);
      if (savedRadiance !== null) setSkinRadiance(Number(savedRadiance));

      const savedClarity = localStorage.getItem(STORAGE_KEYS.CLARITY);
      if (savedClarity !== null) setClarity(Number(savedClarity));

      const savedBrightness = localStorage.getItem(STORAGE_KEYS.BRIGHTNESS);
      if (savedBrightness !== null) setBrightness(Number(savedBrightness));

      const savedContrast = localStorage.getItem(STORAGE_KEYS.CONTRAST);
      if (savedContrast !== null) setContrast(Number(savedContrast));

      const savedWarmth = localStorage.getItem(STORAGE_KEYS.WARMTH);
      if (savedWarmth !== null) setWarmth(Number(savedWarmth));

      const savedSat = localStorage.getItem(STORAGE_KEYS.SATURATION);
      if (savedSat !== null) setSaturation(Number(savedSat));

      const savedBokeh = localStorage.getItem(STORAGE_KEYS.SOFT_FOCUS_BOKEH);
      if (savedBokeh !== null) setSoftFocusBokeh(Number(savedBokeh));

      const savedVig = localStorage.getItem(STORAGE_KEYS.VIGNETTE_OPACITY);
      if (savedVig !== null) setVignetteOpacity(Number(savedVig));
    } catch (e) {
      console.error(e);
    }
  }, [beautyGrade, customImage]);

  useEffect(() => {
    const handleSync = () => syncFromLocalStorage();
    window.addEventListener('aegis_portrait_sync_event', handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener('aegis_portrait_sync_event', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, [syncFromLocalStorage]);

  const triggerFeedback = (msg: string) => {
    setFeedbackMessage(msg);
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;

    const sizeStr =
      file.size > 1024 * 1024
        ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
        : `${Math.round(file.size / 1024)} KB`;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setCustomImage(result);
        setFileName(file.name);
        setFileSize(sizeStr);

        try {
          localStorage.setItem(STORAGE_KEYS.IMAGE, result);
          localStorage.setItem(STORAGE_KEYS.FILE_NAME, file.name);
          localStorage.setItem(STORAGE_KEYS.FILE_SIZE, sizeStr);
        } catch (err) {
          console.error('Failed to save image to localStorage:', err);
        }

        // Apply best flattering beauty settings immediately
        applyMasterBeautyGlow();
        triggerFeedback('✨ Photo uploaded & beauty grade permanently saved');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  // Full Permanent Reset to Brand Defaults
  const handleResetCustomImage = () => {
    setCustomImage(null);
    setFileName(null);
    setFileSize(null);
    setZoom(124);
    setPosY(24);
    setPosX(50);
    setBeautyGrade('luminous-glow');
    setBrightness(104);
    setContrast(108);
    setWarmth(12);
    setSaturation(98);
    setSkinRadiance(115);
    setClarity(112);
    setSoftFocusBokeh(35);
    setVignetteOpacity(35);
    setAspectRatio(variant === 'compact' ? '1:1' : '4:5');

    try {
      Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
      window.dispatchEvent(new CustomEvent('aegis_portrait_sync_event'));
    } catch (err) {
      console.error(err);
    }
    triggerFeedback('↺ Restored stock defaults');
  };

  // 1-Click Master Beauty & Clarity Presets
  const applyMasterBeautyGlow = () => {
    setBeautyGrade('luminous-glow');
    setZoom(126);
    setPosY(24);
    setPosX(50);
    setBrightness(104);
    setContrast(108);
    setWarmth(12);
    setSaturation(98);
    setSkinRadiance(116);
    setClarity(114);
    setSoftFocusBokeh(35);
    setVignetteOpacity(35);
    triggerFeedback('✨ Luminous Beauty Glow Applied & Saved Permanently');
  };

  const applyUltraClarity = () => {
    setBeautyGrade('ultra-clarity');
    setZoom(125);
    setPosY(24);
    setPosX(50);
    setBrightness(103);
    setContrast(115);
    setWarmth(8);
    setSaturation(100);
    setSkinRadiance(108);
    setClarity(124);
    setSoftFocusBokeh(40);
    setVignetteOpacity(42);
    triggerFeedback('💎 Ultra-HD Clarity Applied & Saved Permanently');
  };

  const applySunlitChic = () => {
    setBeautyGrade('sunlit-chic');
    setZoom(124);
    setPosY(24);
    setPosX(50);
    setBrightness(106);
    setContrast(106);
    setWarmth(18);
    setSaturation(96);
    setSkinRadiance(118);
    setClarity(110);
    setSoftFocusBokeh(30);
    setVignetteOpacity(30);
    triggerFeedback('🌿 Sunlit Chic Applied & Saved Permanently');
  };

  // Manual Confirmation trigger for user assurance
  const handleExplicitSave = () => {
    try {
      localStorage.setItem(STORAGE_KEYS.BEAUTY_GRADE, beautyGrade);
      localStorage.setItem(STORAGE_KEYS.ZOOM, zoom.toString());
      localStorage.setItem(STORAGE_KEYS.POS_Y, posY.toString());
      localStorage.setItem(STORAGE_KEYS.POS_X, posX.toString());
      localStorage.setItem(STORAGE_KEYS.SKIN_RADIANCE, skinRadiance.toString());
      localStorage.setItem(STORAGE_KEYS.CLARITY, clarity.toString());
      localStorage.setItem(STORAGE_KEYS.BRIGHTNESS, brightness.toString());
      localStorage.setItem(STORAGE_KEYS.CONTRAST, contrast.toString());
      localStorage.setItem(STORAGE_KEYS.WARMTH, warmth.toString());
      localStorage.setItem(STORAGE_KEYS.SATURATION, saturation.toString());
      localStorage.setItem(STORAGE_KEYS.SOFT_FOCUS_BOKEH, softFocusBokeh.toString());
      localStorage.setItem(STORAGE_KEYS.VIGNETTE_OPACITY, vignetteOpacity.toString());
      triggerFeedback('✓ All Adjustments Successfully Saved Permanently!');
    } catch (err) {
      console.error(err);
    }
  };

  // Compute CSS filter styling based on active grade, beauty sliders, and sharpness
  const getFilterStyle = (): React.CSSProperties => {
    if (showBefore) {
      return {
        filter: 'none',
        transform: 'none',
        transition: 'filter 0.15s ease'
      };
    }

    let sepiaVal = 0;
    let satVal = saturation;
    let hueVal = 0;
    let contVal = contrast;
    let brightVal = brightness;

    switch (beautyGrade) {
      case 'luminous-glow':
        sepiaVal = 10 + warmth;
        satVal = Math.round(saturation * 0.98);
        hueVal = -2;
        contVal = contrast + 4;
        brightVal = brightness + 3;
        break;
      case 'ultra-clarity':
        sepiaVal = 6 + warmth;
        satVal = saturation;
        hueVal = -1;
        contVal = contrast + 12;
        brightVal = brightness + 2;
        break;
      case 'sunlit-chic':
        sepiaVal = 16 + warmth;
        satVal = Math.round(saturation * 0.95);
        hueVal = -4;
        contVal = contrast + 2;
        brightVal = brightness + 5;
        break;
      case 'vogue-editorial':
        sepiaVal = 12 + warmth;
        satVal = Math.round(saturation * 1.05);
        hueVal = -3;
        contVal = contrast + 14;
        brightVal = brightness + 1;
        break;
      case 'platinum-noir':
        sepiaVal = 0;
        satVal = 0;
        contVal = contrast + 22;
        brightVal = brightness + 2;
        break;
    }

    const filterParts = [
      `brightness(${brightVal}%)`,
      `contrast(${contVal}%)`,
      `sepia(${sepiaVal}%)`,
      `saturate(${satVal}%)`,
      `hue-rotate(${hueVal}deg)`
    ];

    if (clarity > 100) {
      const edgeAmt = ((clarity - 100) / 100) * 0.4;
      filterParts.push(`drop-shadow(0 0 ${edgeAmt}px rgba(0,0,0,0.25))`);
    }

    return {
      filter: filterParts.join(' '),
      transform: `scale(${zoom / 100}) translate(${(50 - posX) * 0.35}%, ${(24 - posY) * 0.45}%)`,
      transformOrigin: `${posX}% ${posY}%`,
      objectPosition: `${posX}% ${posY}%`,
      transition: 'filter 0.25s ease, transform 0.2s ease-out'
    };
  };

  const getAspectClass = () => {
    switch (aspectRatio) {
      case '4:5':
        return 'aspect-4/5';
      case '3:4':
        return 'aspect-3/4';
      case '1:1':
        return 'aspect-square';
      case '9:16':
        return 'aspect-9/16 max-h-[620px]';
      default:
        return 'aspect-4/5';
    }
  };

  const handleExportCanvas = () => {
    if (!currentImageSrc) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = currentImageSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = 1200;
      canvas.height = 1500;

      ctx.fillStyle = '#1D201D';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) sepia(${warmth * 1.5}%) saturate(${saturation}%)`;

      const sWidth = img.width / (zoom / 100);
      const sHeight = img.height / (zoom / 100);
      const sx = (img.width - sWidth) * (posX / 100);
      const sy = (img.height - sHeight) * (posY / 100);

      ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, canvas.width, canvas.height);

      const link = document.createElement('a');
      link.download = `AEGIS-Arifa-Naved-Beauty-${beautyGrade}.jpg`;
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.click();
    };
  };

  const currentImageSrc =
    customImage ||
    activePortrait.imageUrl ||
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85';

  return (
    <div className="space-y-4">
      {/* Hidden File Trigger */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

      {/* Main High-End Editorial Portrait Frame */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative group overflow-hidden bg-[#1D201D] border rounded-[4px] shadow-md transition-all ${
          isDragging
            ? 'border-[#E8E1D6] ring-2 ring-[#4B5848] scale-[1.01]'
            : 'border-[#3E453D]'
        }`}
        style={{
          filter: 'drop-shadow(0 6px 20px rgba(29, 32, 29, 0.18))'
        }}
      >
        {/* Precision Registration Marks */}
        <div className="absolute top-2 left-2 z-20 pointer-events-none text-[#E8E1D6]/40 font-mono-spec text-[10px] leading-none">
          ┌
        </div>
        <div className="absolute top-2 right-2 z-20 pointer-events-none text-[#E8E1D6]/40 font-mono-spec text-[10px] leading-none">
          ┐
        </div>
        <div className="absolute bottom-12 left-2 z-20 pointer-events-none text-[#E8E1D6]/40 font-mono-spec text-[10px] leading-none">
          └
        </div>
        <div className="absolute bottom-12 right-2 z-20 pointer-events-none text-[#E8E1D6]/40 font-mono-spec text-[10px] leading-none">
          ┘
        </div>

        {/* Top Floating Badge Tray */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#20231F]/90 backdrop-blur-md border border-[#4B5848]/70 rounded-[2px] text-[#F8F5EF] text-[9px] font-mono-spec tracking-widest uppercase shadow-xs">
            <AegisMonogram size={10} color="#E8E1D6" />
            <span>
              {customImage ? 'ARIFA NAVED · FORMULATION LEAD' : activePortrait.tag}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 bg-[#4B5848]/90 text-[#F8F5EF] text-[8px] font-mono-spec tracking-wider uppercase rounded-[2px] border border-[#5E6D5B]">
            <Sparkles className="w-2.5 h-2.5 text-[#E8E1D6]" />
            <span>{beautyGrade.replace('-', ' ').toUpperCase()}</span>
          </div>
        </div>

        {/* Top Right Quick Actions */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
          {/* Hold to compare button */}
          <button
            type="button"
            onMouseDown={() => setShowBefore(true)}
            onMouseUp={() => setShowBefore(false)}
            onTouchStart={() => setShowBefore(true)}
            onTouchEnd={() => setShowBefore(false)}
            className="px-2.5 py-1 bg-[#20231F]/85 hover:bg-[#20231F] text-[#CFC8BC] hover:text-[#F8F5EF] backdrop-blur-xs border border-[#3E453D] rounded-[2px] text-[8px] font-mono-spec tracking-wider uppercase transition-colors select-none"
            title="Press and hold to compare with unedited photo"
          >
            <Eye className="w-2.5 h-2.5 inline mr-1" />
            <span>{showBefore ? 'RAW' : 'COMPARE'}</span>
          </button>

          {/* Quick File Select Button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-2.5 py-1 bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] backdrop-blur-xs border border-[#5E6D5B] rounded-[2px] text-[9px] font-mono-spec tracking-wider uppercase flex items-center gap-1 transition-colors shadow-xs"
          >
            <Camera className="w-3 h-3" />
            <span>{customImage ? 'CHANGE' : 'UPLOAD'}</span>
          </button>
        </div>

        {/* Feedback Banner */}
        {feedbackMessage && (
          <div className="absolute top-12 inset-x-4 z-30 flex justify-center animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="px-3.5 py-2 bg-[#20231F]/95 border border-[#E8E1D6] text-[#F8F5EF] text-[11px] font-mono-spec rounded-[3px] shadow-lg flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E8E1D6]" />
              <span className="font-semibold">{feedbackMessage}</span>
            </div>
          </div>
        )}

        {/* Drag Over Hint */}
        {isDragging && (
          <div className="absolute inset-0 z-30 bg-[#20231F]/85 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center text-[#F8F5EF] space-y-2">
            <Upload className="w-8 h-8 text-[#E8E1D6] animate-bounce" />
            <p className="font-serif-editorial text-lg">Drop your photo here</p>
            <p className="text-[10px] font-mono-spec text-[#A9B7B7]">
              Instantly applies luminous skin radiance & facial clarity
            </p>
          </div>
        )}

        {/* Image Display Frame with Maintained Aspect Ratio and Retouch Layer */}
        <div
          onClick={() => setShowEditorTools(!showEditorTools)}
          className={`w-full overflow-hidden flex items-center justify-center bg-[#151715] cursor-pointer relative ${getAspectClass()}`}
        >
          {/* Main Retouched Image */}
          <img
            src={currentImageSrc}
            alt="Arifa Naved - Formulation Lead"
            className="w-full h-full object-cover"
            style={getFilterStyle()}
            referrerPolicy="no-referrer"
          />

          {/* Luminous Skin Glow & Highlight Softener Overlay */}
          {!showBefore && skinRadiance > 100 && (
            <div
              className="absolute inset-0 pointer-events-none bg-radial from-[#F8F5EF]/15 via-transparent to-transparent mix-blend-screen transition-opacity"
              style={{ opacity: (skinRadiance - 100) / 100 }}
            />
          )}

          {/* Soft Focus Edge Defocus (Subject Isolation from busy background) */}
          {!showBefore && softFocusBokeh > 0 && (
            <div
              className="absolute inset-0 pointer-events-none bg-radial from-transparent via-[#1D201D]/10 to-[#151715]/70 mix-blend-multiply transition-opacity"
              style={{ opacity: softFocusBokeh / 100 }}
            />
          )}

          {/* Directional Studio Fill Vignette */}
          {!showBefore && (
            <div
              className="absolute inset-0 pointer-events-none bg-radial from-transparent via-[#1D201D]/20 to-[#151715]/75 mix-blend-multiply transition-opacity"
              style={{ opacity: vignetteOpacity / 100 }}
            />
          )}

          {/* Editorial Bottom Scrim Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none bg-gradient-to-t from-[#151715] via-[#151715]/80 to-transparent" />
        </div>

        {/* Bottom Studio Metadata Strip */}
        <div className="absolute bottom-0 inset-x-0 p-3.5 bg-gradient-to-t from-[#151715] via-[#151715]/95 to-transparent flex items-end justify-between text-left z-20">
          <div className="space-y-0.5">
            <span className="text-[9px] font-mono-spec text-[#A9B7B7] uppercase tracking-widest block">
              CHIEF FORMULATION ARCHITECT
            </span>
            <h4 className="text-sm sm:text-base font-serif-editorial text-[#F8F5EF] font-medium leading-none">
              Arifa Naved
            </h4>
            <span className="text-[10px] font-mono-spec text-[#CFC8BC] block">
              {customImage ? 'Delhi Laboratory · Primary Research Lead' : activePortrait.setting}
            </span>
          </div>

          {showControls && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowEditorTools(!showEditorTools);
              }}
              className={`px-2.5 py-1 text-[10px] font-mono-spec rounded-[2px] flex items-center gap-1.5 shadow-xs transition-colors ${
                showEditorTools
                  ? 'bg-[#E8E1D6] text-[#20231F] font-bold'
                  : 'bg-[#2E332D] hover:bg-[#4B5848] text-[#F8F5EF]'
              }`}
            >
              <Sliders className="w-3 h-3" />
              <span>{showEditorTools ? 'Close Tools' : 'Edit Beauty & Clarity'}</span>
            </button>
          )}
        </div>
      </div>

      {/* QUICK BEAUTY & CLARITY ACTION STRIP */}
      <div className="p-3.5 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[4px] flex flex-wrap items-center justify-between gap-3 text-left">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#4B5848] text-[#F8F5EF] flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-[#E8E1D6]" />
          </div>
          <div className="text-[11px] leading-tight">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#20231F] font-serif-editorial text-sm">
                Luminous Beauty & Clarity Engine
              </span>
              <span className="text-[9px] font-mono-spec text-[#4B5848] bg-[#E8E1D6] px-1.5 py-0.5 rounded-[2px] font-bold">
                PERMANENT STORAGE ON
              </span>
            </div>
            <span className="text-[#5C625B] text-[10px] font-mono-spec">
              Radiant Skin Tone · Eye & Hair Clarity · Auto-Persisted to Browser
            </span>
          </div>
        </div>

        {/* 1-Click Beauty Quick Actions */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={applyMasterBeautyGlow}
            className="px-3 py-1.5 bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] text-[10px] font-mono-spec uppercase rounded-[2px] font-bold flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E8E1D6]" />
            <span>Master Glow</span>
          </button>

          <button
            onClick={applyUltraClarity}
            className="px-2.5 py-1.5 bg-[#F8F5EF] hover:bg-[#E8E1D6] border border-[#CFC8BC] text-[#20231F] text-[10px] font-mono-spec uppercase rounded-[2px] font-semibold flex items-center gap-1 transition-colors"
          >
            <Aperture className="w-3 h-3 text-[#4B5848]" />
            <span>Ultra Clarity</span>
          </button>

          <button
            onClick={applySunlitChic}
            className="px-2.5 py-1.5 bg-[#F8F5EF] hover:bg-[#E8E1D6] border border-[#CFC8BC] text-[#20231F] text-[10px] font-mono-spec uppercase rounded-[2px] font-semibold flex items-center gap-1 transition-colors"
          >
            <Sun className="w-3 h-3 text-[#4B5848]" />
            <span>Sunlit Chic</span>
          </button>
        </div>
      </div>

      {/* DEDICATED FILE INPUT FIELD */}
      <div className="p-4 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] space-y-3 text-left shadow-xs">
        <div className="flex items-center justify-between border-b border-[#CFC8BC] pb-2">
          <div className="flex items-center gap-2">
            <FileImage className="w-4 h-4 text-[#4B5848]" />
            <span className="text-xs font-mono-spec font-bold text-[#20231F] uppercase tracking-wider">
              REPLACE PROFILE IMAGE (LOCAL FILE)
            </span>
          </div>
          {customImage && (
            <span className="text-[9px] font-mono-spec text-[#4B5848] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> ACTIVE LOCAL PHOTO (SAVED)
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <div className="relative flex-1">
            <input
              ref={visibleFileInputRef}
              id="arifa-local-file-input"
              type="file"
              accept="image/png, image/jpeg, image/webp, image/avif, image/*"
              onChange={handleImageUpload}
              className="w-full text-xs font-mono-spec text-[#20231F] file:mr-3 file:py-2 file:px-3 file:rounded-[2px] file:border-0 file:text-[11px] file:font-mono-spec file:font-semibold file:bg-[#4B5848] file:text-[#F8F5EF] hover:file:bg-[#394536] file:cursor-pointer cursor-pointer bg-[#F2EEE7] p-1.5 border border-[#CFC8BC] rounded-[3px]"
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowEditorTools(!showEditorTools)}
              className="px-3.5 py-2 bg-[#F2EEE7] hover:bg-[#E8E1D6] border border-[#CFC8BC] text-[#20231F] text-[10px] font-mono-spec uppercase rounded-[2px] font-semibold flex items-center gap-1.5 transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#4B5848]" />
              <span>{showEditorTools ? 'Hide Sliders' : 'Fine-Tune Sliders'}</span>
            </button>
          </div>
        </div>

        {/* Selected File Details */}
        {fileName && (
          <div className="text-[10px] font-mono-spec text-[#5C625B] flex flex-wrap items-center justify-between gap-2 pt-1">
            <span>
              File: <strong className="text-[#20231F]">{fileName}</strong> ({fileSize})
            </span>
            <button
              onClick={handleResetCustomImage}
              className="text-[#4B5848] hover:underline flex items-center gap-1"
            >
              <RefreshCw className="w-2.5 h-2.5" /> Reset to Stock Default
            </button>
          </div>
        )}
      </div>

      {/* COMPREHENSIVE BEAUTY & CLARITY RETOUCH SUITE */}
      {showControls && showEditorTools && (
        <div className="p-4 sm:p-5 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] space-y-5 text-left shadow-xs animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-[#CFC8BC] pb-3">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#4B5848]" />
              <h5 className="font-serif-editorial text-base font-semibold text-[#20231F]">
                Portrait Beauty Retouch & Clarity Engine
              </h5>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleExplicitSave}
                className="px-3 py-1 bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] text-[10px] font-mono-spec rounded-[2px] flex items-center gap-1.5 font-bold shadow-xs transition-colors"
                title="Save Changes Permanently"
              >
                <Save className="w-3 h-3 text-[#E8E1D6]" />
                <span>Save Permanently</span>
              </button>

              <button
                onClick={handleExportCanvas}
                className="px-2.5 py-1 bg-[#F2EEE7] hover:bg-[#E8E1D6] border border-[#CFC8BC] text-[#20231F] text-[9px] font-mono-spec rounded-[2px] flex items-center gap-1 font-semibold"
                title="Download Color Graded Image"
              >
                <Download className="w-2.5 h-2.5 text-[#4B5848]" />
                <span>Export High-Res</span>
              </button>
            </div>
          </div>

          {/* Beauty Retouch Presets */}
          <div className="space-y-2">
            <label className="text-[10px] font-mono-spec font-bold text-[#5C625B] uppercase flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#4B5848]" />
              <span>Curated Beauty & Lighting Grades (Auto-Saved)</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(
                [
                  {
                    id: 'luminous-glow',
                    name: '✨ Luminous Beauty Glow',
                    desc: 'Porcelain radiance, soft blush warmth'
                  },
                  {
                    id: 'ultra-clarity',
                    name: '💎 Ultra-HD Crystal Clarity',
                    desc: 'Sharp eyes, defined eyelashes & hair'
                  },
                  {
                    id: 'sunlit-chic',
                    name: '🌿 Sunlit Golden Chic',
                    desc: 'Soft sun rays, warm golden skin'
                  },
                  {
                    id: 'vogue-editorial',
                    name: '🏛️ Vogue Editorial',
                    desc: 'Micro-contrast high-fashion mood'
                  },
                  {
                    id: 'platinum-noir',
                    name: '🖤 Platinum Noir Studio',
                    desc: 'Classic silver contrast portrait'
                  }
                ] as const
              ).map((grade) => (
                <button
                  key={grade.id}
                  onClick={() => {
                    setBeautyGrade(grade.id);
                    triggerFeedback(`✓ Preset ${grade.name} applied & saved`);
                  }}
                  className={`p-2.5 rounded-[2px] border text-left transition-all ${
                    beautyGrade === grade.id
                      ? 'bg-[#4B5848] text-[#F8F5EF] border-[#4B5848] shadow-xs'
                      : 'bg-[#F2EEE7] text-[#20231F] border-[#CFC8BC] hover:bg-[#E8E1D6]'
                  }`}
                >
                  <span className="text-[11px] font-bold block font-serif-editorial leading-tight">
                    {grade.name}
                  </span>
                  <span
                    className={`text-[9px] font-mono-spec block mt-0.5 ${
                      beautyGrade === grade.id ? 'text-[#CFC8BC]' : 'text-[#5C625B]'
                    }`}
                  >
                    {grade.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* BEAUTY & SKIN RADIANCE SLIDERS */}
          <div className="p-3.5 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[3px] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono-spec font-bold text-[#20231F] uppercase flex items-center gap-1.5">
                <Heart className="w-3 h-3 text-[#4B5848]" />
                <span>SKIN RADIANCE & FACIAL DEFINITION</span>
              </span>
              <span className="text-[9px] font-mono-spec text-[#4B5848] font-bold">
                AUTO-SAVING ON
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* Skin Radiance */}
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-mono-spec text-[#5C625B]">
                  <span>SKIN RADIANCE / GLOW</span>
                  <span className="font-bold text-[#20231F]">{skinRadiance}%</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={135}
                  value={skinRadiance}
                  onChange={(e) => setSkinRadiance(Number(e.target.value))}
                  className="w-full accent-[#4B5848] h-1.5 bg-[#CFC8BC] rounded-xs cursor-pointer"
                />
              </div>

              {/* Clarity & Sharpness */}
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-mono-spec text-[#5C625B]">
                  <span>EYE & HAIR CLARITY</span>
                  <span className="font-bold text-[#20231F]">{clarity}%</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={140}
                  value={clarity}
                  onChange={(e) => setClarity(Number(e.target.value))}
                  className="w-full accent-[#4B5848] h-1.5 bg-[#CFC8BC] rounded-xs cursor-pointer"
                />
              </div>

              {/* Background Soft Focus / Bokeh */}
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-mono-spec text-[#5C625B]">
                  <span>BACKGROUND DEFOCUS (BOKEH)</span>
                  <span className="font-bold text-[#20231F]">{softFocusBokeh}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={70}
                  value={softFocusBokeh}
                  onChange={(e) => setSoftFocusBokeh(Number(e.target.value))}
                  className="w-full accent-[#4B5848] h-1.5 bg-[#CFC8BC] rounded-xs cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* SMART COMPOSITION & FACE CENTERING */}
          <div className="p-3.5 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[3px] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono-spec font-bold text-[#20231F] uppercase flex items-center gap-1.5">
                <Crop className="w-3 h-3 text-[#4B5848]" />
                <span>FLATTERING FRAMING & FACE CENTERING</span>
              </span>
              <span className="text-[9px] font-mono-spec text-[#5C625B]">
                RATIO: {aspectRatio}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* Zoom Scale */}
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-mono-spec text-[#5C625B]">
                  <span>PORTRAIT ZOOM</span>
                  <span className="font-bold text-[#20231F]">{zoom}%</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={155}
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="w-full accent-[#4B5848] h-1.5 bg-[#CFC8BC] rounded-xs cursor-pointer"
                />
              </div>

              {/* Eye-line vertical focus */}
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-mono-spec text-[#5C625B]">
                  <span>VERTICAL EYE-LINE FOCUS</span>
                  <span className="font-bold text-[#20231F]">{posY}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={posY}
                  onChange={(e) => setPosY(Number(e.target.value))}
                  className="w-full accent-[#4B5848] h-1.5 bg-[#CFC8BC] rounded-xs cursor-pointer"
                />
              </div>

              {/* Horizontal Pan */}
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-mono-spec text-[#5C625B]">
                  <span>HORIZONTAL PAN</span>
                  <span className="font-bold text-[#20231F]">{posX}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={posX}
                  onChange={(e) => setPosX(Number(e.target.value))}
                  className="w-full accent-[#4B5848] h-1.5 bg-[#CFC8BC] rounded-xs cursor-pointer"
                />
              </div>
            </div>

            {/* Aspect Ratio Toggles */}
            <div className="pt-2 border-t border-[#CFC8BC]/60 flex items-center justify-between gap-2">
              <span className="text-[9px] font-mono-spec text-[#5C625B] uppercase">
                ASPECT RATIO:
              </span>
              <div className="grid grid-cols-4 gap-1.5 flex-1 max-w-xs">
                {(['4:5', '3:4', '1:1', '9:16'] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setAspectRatio(r);
                      triggerFeedback(`✓ Aspect ratio ${r} saved`);
                    }}
                    className={`py-1 text-[9px] font-mono-spec rounded-[2px] border text-center transition-colors ${
                      aspectRatio === r
                        ? 'bg-[#4B5848] text-[#F8F5EF] border-[#4B5848] font-bold'
                        : 'bg-[#F8F5EF] text-[#20231F] border-[#CFC8BC] hover:bg-[#E8E1D6]'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* LIGHTING & TONE CONTROLS */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1">
            <div className="space-y-1">
              <div className="flex justify-between text-[9px] font-mono-spec text-[#5C625B]">
                <span>BRIGHTNESS</span>
                <span className="text-[#20231F] font-bold">{brightness}%</span>
              </div>
              <input
                type="range"
                min={85}
                max={125}
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                className="w-full accent-[#4B5848] h-1.5 bg-[#CFC8BC] rounded-xs cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[9px] font-mono-spec text-[#5C625B]">
                <span>CONTRAST</span>
                <span className="text-[#20231F] font-bold">{contrast}%</span>
              </div>
              <input
                type="range"
                min={85}
                max={135}
                value={contrast}
                onChange={(e) => setContrast(Number(e.target.value))}
                className="w-full accent-[#4B5848] h-1.5 bg-[#CFC8BC] rounded-xs cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[9px] font-mono-spec text-[#5C625B]">
                <span>WARMTH (PEACH TONE)</span>
                <span className="text-[#20231F] font-bold">+{warmth}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={35}
                value={warmth}
                onChange={(e) => setWarmth(Number(e.target.value))}
                className="w-full accent-[#4B5848] h-1.5 bg-[#CFC8BC] rounded-xs cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[9px] font-mono-spec text-[#5C625B]">
                <span>STUDIO VIGNETTE</span>
                <span className="text-[#20231F] font-bold">{vignetteOpacity}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={80}
                value={vignetteOpacity}
                onChange={(e) => setVignetteOpacity(Number(e.target.value))}
                className="w-full accent-[#4B5848] h-1.5 bg-[#CFC8BC] rounded-xs cursor-pointer"
              />
            </div>
          </div>

          {/* Reset & Permanent Storage Status Footer */}
          <div className="pt-3 border-t border-[#CFC8BC] flex flex-wrap items-center justify-between gap-2">
            <button
              onClick={handleResetCustomImage}
              className="text-[10px] font-mono-spec text-[#5C625B] hover:text-[#20231F] underline flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Restore Stock Default</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleExplicitSave}
                className="px-2.5 py-1 bg-[#4B5848] text-[#F8F5EF] text-[9px] font-mono-spec rounded-[2px] flex items-center gap-1 font-bold shadow-xs hover:bg-[#394536]"
              >
                <Check className="w-3 h-3 text-[#E8E1D6]" />
                <span>Save As Permanent Profile</span>
              </button>
              <span className="text-[9px] font-mono-spec text-[#4B5848] font-bold">
                ✓ ALL CHANGES SAVED PERMANENTLY
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
