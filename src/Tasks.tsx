import React, { useState } from "react";

interface EnumServiceGetOrderBy {
  teste: Array<{
    task: {
      check: boolean;
      content: string;
    };
  }>;
}

export default function Tasks({ teste }: EnumServiceGetOrderBy) {
  console.log(teste);

  return <div></div>;
}
