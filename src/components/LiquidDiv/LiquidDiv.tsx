import { cn } from "cn";
import { Component, ComponentProps, ComponentType, ExoticComponent, FC, ForwardRefExoticComponent, FunctionComponent, JSX, PropsWithChildren, ReactNode } from "react";

type LiquidDivProps<
  As extends keyof JSX.IntrinsicElements
> = Omit<ComponentProps<As>, "as"> & {
  disabled?: boolean
  as?: As
}

export function LiquidDiv<
  As extends keyof JSX.IntrinsicElements = "div"
>(props: LiquidDivProps<As>) {
  const { className, disabled = false, children, as: As = "div", style = {}, ...attrs } = props as LiquidDivProps<"div">

  return (
    <As
      {...attrs as object}
      className={cn("isolate relative bg-sidebar/70 backdrop-blur-[8px]", className)}
      style={{
        ...style,
      }}
    >
      <div
        className="transition-shadow liquid-container overflow-hidden flex pointer-events-none z-[-1] absolute inset-0 rounded-[inherit]"
        style={{
          boxShadow: disabled
            ? "0px 0px 0px 1px transparent,3px 0px 0px -2px transparent,-3px 0px 0px -2px transparent,inset 0px 40px 10px -40px transparent, inset 0px -40px 10px -40px transparent"
            : "0px 0px 0px 1px rgba(0,0,0,.3),3px 0px 0px -2px rgba(0,0,0,.3),-3px 0px 0px -2px rgba(0,0,0,.3),inset 0px 40px 10px -40px #1A1A1A, inset 0px -40px 10px -40px #1A1A1A"
        }}
      >
        <div
          className="transition-shadow size-full rounded-[inherit] blur-[1px]"
          style={{
            boxShadow: disabled
              ? "inset 0 1px 0 transparent, inset 0 -1px 0 transparent"
              : "inset 0 1px 0 rgba(255,255,255,.3), inset 0 -1px 0 rgba(255,255,255,.3)"
          }}
        />
      </div>

      {children}
    </As>
  )
}
