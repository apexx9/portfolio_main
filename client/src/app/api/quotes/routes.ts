import { NextResponse } from "next/server";
import { ZEN_QUOTES_API_URL } from "@/constants/components";
import axios from "axios";

export async function GET() {
    try {
        const response = await axios.get(ZEN_QUOTES_API_URL + "random");
        const data = await response.data;
        return NextResponse.json({ quote: JSON.stringify(data[0].q), author: JSON.stringify(data[0].a) });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch quote" },
            { status: 500 }
        );
    }
}