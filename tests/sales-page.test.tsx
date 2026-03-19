import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SalesPage } from "@/components/sales-page";

describe("SalesPage", () => {
  it("renders the redesigned Chinese landing page structure", () => {
    render(<SalesPage locale="zh" />);

    expect(screen.getByRole("heading", { name: /找回 Launchpad/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /免费下载/i })).toHaveAttribute("href");
    expect(screen.getAllByRole("button", { name: /解锁 PRO/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/macOS 26/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Trackpad Gesture/i)).toBeInTheDocument();
    expect(screen.getByTestId("hero-visual")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Launchpad 回归后的体验/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /双档终身授权/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /常见问题/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /三步切回熟悉节奏/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /退款政策/i })).toHaveAttribute("href", "/zh/refund");
  });

  it("renders the redesigned English landing page structure", () => {
    render(<SalesPage locale="en" />);

    expect(screen.getByRole("heading", { name: /Bring Back Launchpad/i })).toBeInTheDocument();
    expect(screen.getAllByText(/macOS 26/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Hot Corners/i).length).toBeGreaterThan(0);
    expect(screen.getByTestId("hero-visual")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Why Launchpad Feels Right Again/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Two lifetime plans/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Back in Flow in Three Moves/i })).toBeInTheDocument();
    expect(screen.getAllByText("$5.99").length).toBeGreaterThan(0);
    expect(screen.getAllByText("$9.99").length).toBeGreaterThan(0);
    expect(screen.getAllByRole("button", { name: /Unlock PRO|Buy PRO/i })).toHaveLength(3);
    expect(screen.getByRole("link", { name: /Refund Policy/i })).toHaveAttribute("href", "/en/refund");
  });
});
