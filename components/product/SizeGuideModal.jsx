"use client";

import { useEffect } from "react";
import { Portal } from "@/components/common/Portal";
import { XIcon } from "@/components/common/Icons";
import { useScrollLock } from "@/hooks/use-scroll-lock";

export function SizeGuideModal({ isOpen, onClose, category = "Jeans" }) {
  useScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isBottomWear = ["Jeans", "Cotton Pants", "Formal Pants", "Lowers"].includes(category);
  const isFootwear = ["Shoes"].includes(category);
  const isTopWear = ["Shirts", "T-Shirts", "Winter Wear"].includes(category);

  return (
    <Portal>
      <div className="fixed inset-0 z-[99] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
        <div
          className="fixed inset-0"
          onClick={onClose}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-lg bg-white rounded-[4px] border border-[#eae8e3] shadow-2xl p-5 sm:p-7 overflow-y-auto max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center justify-between pb-3.5 border-b border-[#f0eee9]">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#737373]">
                SIZE & FIT GUIDE
              </span>
              <h3 className="text-lg font-bold text-[#111111] mt-0.5">
                {category} Size Chart
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-[#777777] hover:text-black hover:bg-[#f5f5f5] transition-colors cursor-pointer"
              aria-label="Close size guide"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Measurement Tables */}
          <div className="mt-4 text-xs sm:text-sm">
            <p className="text-xs text-[#666666] mb-3">
              All measurements are in inches. For a relaxed fit, we recommend sizing up.
            </p>

            {isBottomWear && (
              <div className="overflow-x-auto">
                <table className="w-full text-left border border-[#eae8e3] text-xs">
                  <thead className="bg-[#f8f7f5] text-[#111111] font-bold">
                    <tr>
                      <th className="p-2.5 border-b border-r border-[#eae8e3]">Brand Size</th>
                      <th className="p-2.5 border-b border-r border-[#eae8e3]">Waist (in)</th>
                      <th className="p-2.5 border-b border-r border-[#eae8e3]">Hip (in)</th>
                      <th className="p-2.5 border-b border-[#eae8e3]">Inseam (in)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eae8e3] text-[#444444]">
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">28</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">28 - 29</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">36</td>
                      <td className="p-2.5">30.5</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">30</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">30 - 31</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">38</td>
                      <td className="p-2.5">31.0</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">32</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">32 - 33</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">40</td>
                      <td className="p-2.5">31.5</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">34</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">34 - 35</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">42</td>
                      <td className="p-2.5">32.0</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">36</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">36 - 37</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">44</td>
                      <td className="p-2.5">32.5</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">38</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">38 - 39</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">46</td>
                      <td className="p-2.5">33.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {isTopWear && (
              <div className="overflow-x-auto">
                <table className="w-full text-left border border-[#eae8e3] text-xs">
                  <thead className="bg-[#f8f7f5] text-[#111111] font-bold">
                    <tr>
                      <th className="p-2.5 border-b border-r border-[#eae8e3]">Size</th>
                      <th className="p-2.5 border-b border-r border-[#eae8e3]">Chest (in)</th>
                      <th className="p-2.5 border-b border-r border-[#eae8e3]">Shoulder (in)</th>
                      <th className="p-2.5 border-b border-[#eae8e3]">Length (in)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eae8e3] text-[#444444]">
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">S</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">38 - 39</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">17.5</td>
                      <td className="p-2.5">27.5</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">M</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">40 - 41</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">18.5</td>
                      <td className="p-2.5">28.5</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">L</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">42 - 43</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">19.5</td>
                      <td className="p-2.5">29.5</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">XL</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">44 - 45</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">20.5</td>
                      <td className="p-2.5">30.5</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">XXL</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">46 - 47</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">21.5</td>
                      <td className="p-2.5">31.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {isFootwear && (
              <div className="overflow-x-auto">
                <table className="w-full text-left border border-[#eae8e3] text-xs">
                  <thead className="bg-[#f8f7f5] text-[#111111] font-bold">
                    <tr>
                      <th className="p-2.5 border-b border-r border-[#eae8e3]">UK / India</th>
                      <th className="p-2.5 border-b border-r border-[#eae8e3]">US Size</th>
                      <th className="p-2.5 border-b border-r border-[#eae8e3]">EU Size</th>
                      <th className="p-2.5 border-b border-[#eae8e3]">Foot Length (cm)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eae8e3] text-[#444444]">
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">UK 6</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">7.0</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">40</td>
                      <td className="p-2.5">25.0</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">UK 7</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">8.0</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">41</td>
                      <td className="p-2.5">25.8</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">UK 8</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">9.0</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">42</td>
                      <td className="p-2.5">26.7</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">UK 9</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">10.0</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">43</td>
                      <td className="p-2.5">27.5</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">UK 10</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">11.0</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">44</td>
                      <td className="p-2.5">28.3</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-[#111111] border-r border-[#eae8e3]">UK 11</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">12.0</td>
                      <td className="p-2.5 border-r border-[#eae8e3]">45</td>
                      <td className="p-2.5">29.2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {!isBottomWear && !isTopWear && !isFootwear && (
              <p className="text-xs text-[#666666]">
                This item is designed as standard universal sizing or free-size.
              </p>
            )}

            {/* How to Measure */}
            <div className="mt-5 p-3.5 bg-[#faf9f7] rounded-[2px] border border-[#eae8e3]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                How to Measure
              </h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Take measurements directly against your body using a flexible measuring tape. Keep the tape comfortably snug without pulling tight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}
