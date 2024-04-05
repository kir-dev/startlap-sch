export async function PATCH() {
  const profile = await getProfile()
  return NextResponse.json(profile)
}
