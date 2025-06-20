// src/components/DepositWithdrawModal.tsx
"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DepositWithdrawModal = ({ isOpen, onClose }: ModalProps) => {
  const { token, user, refetchUserProfile } = useAuth();
  const [amount, setAmount] = useState<number | "">("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const api = axios.create({
    baseURL: "http://localhost:5000",
    headers: { Authorization: `Bearer ${token}` },
  });

  const handleTransaction = async (type: "deposit" | "withdraw") => {
    if (!amount || amount <= 0) {
      toast.error("กรุณาใส่จำนวนเงินที่ถูกต้อง");
      return;
    }

    setIsSubmitting(true);

    const promise = api
      .post(`/transactions/${type}`, { amount: Number(amount) })
      .then(async (res) => {
        await refetchUserProfile(); // สำคัญมาก: ดึงข้อมูล user ใหม่
        return res; // ส่งต่อ response
      });

    toast
      .promise(promise, {
        loading: "กำลังทำรายการ...",
        success: () => {
          setAmount(""); // เคลียร์ฟอร์ม
          // onClose(); // ปิด modal อัตโนมัติ
          return `ทำรายการ${type === "deposit" ? "ฝาก" : "ถอน"}สำเร็จ!`;
        },
        error: `ทำรายการ${type === "deposit" ? "ฝาก" : "ถอน"}ไม่สำเร็จ`,
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (!isOpen) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="bg-gray-900 text-white p-6 rounded-lg shadow-xl w-full max-w-sm border border-golden-border"
        onClick={(e) => e.stopPropagation()} // ป้องกันการปิด Modal เมื่อคลิกข้างใน
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-golden-text">ฝาก / ถอนเงิน</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            &times;
          </button>
        </div>

        <div className="mb-4">
          <p>
            ยอดเงินปัจจุบัน:{" "}
            <span className="font-bold text-green-400">
              {user?.balance?.toFixed(2) || "0.00"} บาท
            </span>
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-sm mb-1">
              จำนวนเงิน
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-golden-border"
              placeholder="ใส่จำนวนเงิน..."
              disabled={isSubmitting}
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleTransaction("deposit")}
              disabled={isSubmitting}
              className="flex-1 bg-green-600 hover:bg-green-700 p-2 rounded transition-colors disabled:bg-gray-500"
            >
              {isSubmitting ? "..." : "ฝากเงิน"}
            </button>
            <button
              onClick={() => handleTransaction("withdraw")}
              disabled={isSubmitting}
              className="flex-1 bg-red-600 hover:bg-red-700 p-2 rounded transition-colors disabled:bg-gray-500"
            >
              {isSubmitting ? "..." : "ถอนเงิน"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositWithdrawModal;
